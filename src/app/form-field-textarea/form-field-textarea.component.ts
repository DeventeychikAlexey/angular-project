import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-textarea',
  templateUrl: './form-field-textarea.component.html',
  styleUrls: ['./form-field-textarea.component.scss'],
})
export class FormFieldTextareaComponent {
  @Input() label = '';
  @Input() errorMessage = '';
  @Input() control!: AbstractControl;
  @Input() appearance = 'outline';
  @Input() required = false;
  @Input() rows = 6;
  @Input() cols?: number;
}
