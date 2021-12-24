import { Component, Input } from '@angular/core';
import { DialogActionInterface } from './interfaces/dialog-action.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() title?: string;
  @Input() text?: string;
  @Input() actions: DialogActionInterface[] = [];
}
