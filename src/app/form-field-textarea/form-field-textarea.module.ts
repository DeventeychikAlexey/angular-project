import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldTextareaComponent } from './form-field-textarea.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FormFieldTextareaComponent],
  exports: [FormFieldTextareaComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class FormFieldTextareaModule {}
