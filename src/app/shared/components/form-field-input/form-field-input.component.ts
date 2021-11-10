import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss'],
})
export class FormFieldInputComponent {
  @Input() label = '';
  @Input() errorMessage = '';
  @Input() control!: AbstractControl;
  @Input() type = 'text';
  @Input() appearance = 'outline';
  @Input() required = false;
}
