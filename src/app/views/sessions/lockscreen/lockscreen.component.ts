import { Component, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
})
export class LockscreenComponent {
  @ViewChild(MatProgressBar, { static: false }) progressBar: MatProgressBar;
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;

  lockscreenData = {
    password: '',
  };

  unlock(): void {
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }
}
