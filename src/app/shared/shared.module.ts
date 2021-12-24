import { NgModule } from '@angular/core';
import { FormFieldInputComponent } from './forms/components/form-field-input/form-field-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormFieldSelectComponent } from './forms/components/form-field-select/form-field-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormFieldTextareaComponent } from './forms/components/form-field-textarea/form-field-textarea.component';
import { FormButtonComponent } from './forms/components/form-button/form-button.component';
import { MatButtonModule } from '@angular/material/button';
import { ProgressBarComponent } from './progress-bar/component/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsService } from './forms/services/forms.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  providers: [FormsService],
  declarations: [
    FormFieldInputComponent,
    FormFieldSelectComponent,
    FormFieldTextareaComponent,
    FormButtonComponent,
    ProgressBarComponent,
    DialogComponent,
  ],
  exports: [
    FormFieldInputComponent,
    FormFieldSelectComponent,
    FormFieldTextareaComponent,
    FormButtonComponent,
    ProgressBarComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
