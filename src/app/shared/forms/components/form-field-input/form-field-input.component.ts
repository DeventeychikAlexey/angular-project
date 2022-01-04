import { Component, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss'],
})
export class FormFieldInputComponent {
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() control!: AbstractControl;
  @Input() type = 'text';
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() required = false;
  @Input() max?: number;
  @Input() min?: number;
}
