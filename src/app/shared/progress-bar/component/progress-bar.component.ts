import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() pending = false;

  get mode(): string {
    return this.pending ? 'indeterminate' : 'determinate';
  }
}
