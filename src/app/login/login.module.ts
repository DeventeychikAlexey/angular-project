import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldInputModule } from '../form-field-input/form-field-input.module';
import { ButtonModule } from '../button/button.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormFieldInputModule,
    ButtonModule,
    ProgressBarModule,
  ],
})
export class LoginModule {}
