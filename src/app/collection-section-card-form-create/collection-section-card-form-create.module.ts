import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionSectionCardFormCreateComponent } from './collection-section-card-form-create.component';
import { CollectionSectionCardFormModule } from '../collection-section-card-form/collection-section-card-form.module';

@NgModule({
  declarations: [CollectionSectionCardFormCreateComponent],
  exports: [CollectionSectionCardFormCreateComponent],
  imports: [CommonModule, CollectionSectionCardFormModule],
})
export class CollectionSectionCardFormCreateModule {}
