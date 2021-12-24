import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
})
export class FormButtonComponent {
  @Input() text?: string;
  @Input() pending = false;
  @Input() type = 'submit';
  @Input() color: ThemePalette = 'primary';
}
