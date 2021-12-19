import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { CollectionModule } from '../collection/collection.module';

@NgModule({
  declarations: [CollectionsComponent],
  exports: [CollectionsComponent],
  imports: [CommonModule, CollectionModule],
})
export class CollectionsModule {}
