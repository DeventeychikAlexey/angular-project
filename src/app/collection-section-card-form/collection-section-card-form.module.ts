import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionSectionCardFormComponent } from './collection-section-card-form.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldInputModule } from '../form-field-input/form-field-input.module';
import { UppyModule } from '../uppy/uppy.module';
import { FormFieldSelectModule } from '../form-field-select/form-field-select.module';
import { FormFieldTextareaModule } from '../form-field-textarea/form-field-textarea.module';
import { ButtonModule } from '../button/button.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';

@NgModule({
  declarations: [CollectionSectionCardFormComponent],
  exports: [CollectionSectionCardFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormFieldInputModule,
    UppyModule,
    FormFieldSelectModule,
    FormFieldTextareaModule,
    ButtonModule,
    ProgressBarModule,
  ],
})
export class CollectionSectionCardFormModule {}
