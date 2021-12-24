import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-form-field-textarea',
  templateUrl: './form-field-textarea.component.html',
  styleUrls: ['./form-field-textarea.component.scss'],
})
export class FormFieldTextareaComponent {
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() control!: AbstractControl;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() required = false;
  @Input() rows = 6;
  @Input() cols?: number;
}
