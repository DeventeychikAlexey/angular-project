import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-form-field-select',
  templateUrl: './form-field-select.component.html',
  styleUrls: ['./form-field-select.component.scss'],
})
export class FormFieldSelectComponent {
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() control!: AbstractControl;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() required = false;
  @Input() list = [];
}
