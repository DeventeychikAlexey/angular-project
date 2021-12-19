import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';
import { FormFieldInputModule } from '../form-field-input/form-field-input.module';

@NgModule({
  declarations: [FilterComponent],
  exports: [FilterComponent],
  imports: [CommonModule, FormsModule, FormFieldInputModule],
})
export class FilterModule {}
