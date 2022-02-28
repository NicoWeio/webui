import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { JobState } from 'app/enums/job-state.enum';
import { forkJoin, of } from 'rxjs';
import {
  catchError, filter, map, switchMap,
} from 'rxjs/operators';
import { ApiEventMessage } from 'app/enums/api-event-message.enum';
import {
  abortJobPressed, jobAdded, jobChanged, jobRemoved, jobsLoaded, jobsNotLoaded,
} from 'app/modules/jobs/store/job.actions';
import { WebSocketService } from 'app/services';
import { adminUiInitialized } from 'app/store/admin-panel/admin.actions';
import { jobAborted } from './job.actions';

@Injectable()
export class JobEffects {
  loadJobs$ = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized),
    switchMap(() => {
      return forkJoin([
        this.ws.call('core.get_jobs', [[['state', '!=', JobState.Success]]]),
        this.ws.call('core.get_jobs', [[['state', '=', JobState.Success], ['time_finished', '>', 1644858159]], { limit: 10 }]),
      ]).pipe(
        map(([jobInProgress, recentlyCompletedJobs]) => {
          console.log(recentlyCompletedJobs.length);
          console.log(recentlyCompletedJobs[recentlyCompletedJobs.length - 1]);
          return jobsLoaded({ jobs: [...jobInProgress, ...recentlyCompletedJobs] });
        }),
        catchError((error) => {
          console.error(error);
          // TODO: See if it would make sense to parse middleware error.
          return of(jobsNotLoaded({
            error: this.translate.instant('Tasks could not be loaded'),
          }));
        }),
      );
    }),
  ));

  // TODO: Two types of subscription need to be refactored into one in WebSocketService.
  subscribeToUpdates$ = createEffect(() => this.actions$.pipe(
    ofType(jobsLoaded),
    switchMap(() => {
      return this.ws.subscribe('core.get_jobs').pipe(
        filter((event) => !(event.msg === ApiEventMessage.Changed && event.cleared)),
        map((event) => {
          switch (event.msg) {
            case ApiEventMessage.Added:
              return jobAdded({ job: event.fields });
            case ApiEventMessage.Changed:
              return jobChanged({ job: event.fields });
          }
        }),
      );
    }),
  ));

  subscribeToRemoval$ = createEffect(() => this.actions$.pipe(
    ofType(jobsLoaded),
    switchMap(() => {
      return this.ws.sub('core.get_jobs').pipe(
        filter((event) => event.msg === ApiEventMessage.Changed && event.cleared),
        map((event) => jobRemoved({ id: event.id })),
      );
    }),
  ));

  abortJob$ = createEffect(() => this.actions$.pipe(
    ofType(abortJobPressed),
    switchMap(({ job }) => {
      return this.ws.call('core.job_abort', [job.id]).pipe(
        map(() => jobAborted({ job })),
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private ws: WebSocketService,
    private translate: TranslateService,
  ) {}
}
