import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionSectionCardFormEditComponent } from './collection-section-card-form-edit.component';
import { CollectionSectionCardFormModule } from '../collection-section-card-form/collection-section-card-form.module';

@NgModule({
  declarations: [CollectionSectionCardFormEditComponent],
  exports: [CollectionSectionCardFormEditComponent],
  imports: [CommonModule, CollectionSectionCardFormModule],
})
export class CollectionSectionCardFormEditModule {}
