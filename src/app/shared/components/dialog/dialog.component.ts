import { Component, Input } from '@angular/core';
import { ButtonActionInterface } from '../../interfaces/button-action.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() closeButton = true;
  @Input() actions: ButtonActionInterface[] = [];
}
