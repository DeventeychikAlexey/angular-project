import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldSelectComponent } from './form-field-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormFieldSelectComponent],
  exports: [FormFieldSelectComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class FormFieldSelectModule {}
