import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldInputComponent } from './form-field-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FormFieldInputComponent],
  exports: [FormFieldInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class FormFieldInputModule {}
