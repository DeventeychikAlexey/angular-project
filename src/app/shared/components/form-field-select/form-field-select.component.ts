import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-select',
  templateUrl: './form-field-select.component.html',
  styleUrls: ['./form-field-select.component.scss'],
})
export class FormFieldSelectComponent {
  @Input() label = '';
  @Input() errorMessage = '';
  @Input() control!: AbstractControl;
  @Input() appearance = 'outline';
  @Input() required = false;
  @Input() options = [];
}
