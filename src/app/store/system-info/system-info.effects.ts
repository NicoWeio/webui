import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import {
  catchError, map, mergeMap, repeat, switchMap,
} from 'rxjs/operators';
import { SystemFeatures } from 'app/interfaces/events/sys-info-event.interface';
import { WebSocketService } from 'app/services/ws.service';
import { adminUiInitialized } from 'app/store/admin-panel/admin.actions';
import {
  ixHardwareLoaded,
  systemFeaturesLoaded, systemInfoLoaded, systemInfoUpdated,
} from 'app/store/system-info/system-info.actions';

@Injectable()
export class SystemInfoEffects {
  loadSystemInfo = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized, systemInfoUpdated),
    mergeMap(() => {
      return this.ws.call('system.info').pipe(
        repeat({ delay: 30000 }),
        map((systemInfo) => systemInfoLoaded({ systemInfo })),
        catchError((error) => {
          // TODO: Basically a fatal error. Handle it.
          console.error(error);
          return EMPTY;
        }),
      );
    }),
  ));

  loadSystemFeatures = createEffect(() => this.actions$.pipe(
    ofType(systemInfoLoaded),
    switchMap(({ systemInfo }) => {
      const features: SystemFeatures = {
        HA: false,
        enclosure: false,
      };
      const profile = { ...systemInfo };

      if (!profile.system_product) {
        // Stick with defaults if value is null
        return of(systemFeaturesLoaded({ systemFeatures: features }));
      }

      if (profile.system_product.includes('FREENAS-MINI-3.0') || profile.system_product.includes('TRUENAS-')) {
        features.enclosure = true;
      }

      // HIGH AVAILABILITY SUPPORT
      if (profile.license?.system_serial_ha || profile.system_product === 'BHYVE') {
        features.HA = true;
        return of(systemFeaturesLoaded({ systemFeatures: features }));
      }
      return of(systemFeaturesLoaded({ systemFeatures: features }));
    }),
  ));

  loadIsIxHardware = createEffect(() => this.actions$.pipe(
    ofType(adminUiInitialized),
    mergeMap(() => {
      return this.ws.call('system.is_ix_hardware').pipe(
        map((isIxHardware) => ixHardwareLoaded({ isIxHardware })),
        catchError((error) => {
          // TODO: Show error message to user?
          console.error(error);
          return of(ixHardwareLoaded({ isIxHardware: false }));
        }),
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private ws: WebSocketService,
  ) { }
}
