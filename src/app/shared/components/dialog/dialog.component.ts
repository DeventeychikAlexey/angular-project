import { Component, OnInit, Input } from '@angular/core';
import { ButtonActionInterface } from '@shared/interfaces/button-action.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() title?: string;
  @Input() text?: string;
  @Input() closeButton: boolean = true;
  @Input() actions: ButtonActionInterface[] = [];

  constructor() {}

  ngOnInit(): void {}
}
