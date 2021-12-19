import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionSectionComponent } from './collection-section.component';
import { CollectionModule } from '../collection/collection.module';

@NgModule({
  declarations: [CollectionSectionComponent],
  exports: [CollectionSectionComponent],
  imports: [CommonModule, CollectionModule],
})
export class CollectionSectionModule {}
