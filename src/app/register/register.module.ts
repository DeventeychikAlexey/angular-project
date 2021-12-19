import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldInputModule } from '../form-field-input/form-field-input.module';
import { ButtonModule } from '../button/button.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';

@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormFieldInputModule,
    ButtonModule,
    ProgressBarModule,
  ],
})
export class RegisterModule {}
