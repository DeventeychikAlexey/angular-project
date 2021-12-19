import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsSectionComponent } from './collections-section.component';
import { ListSectionModule } from '../list-section/list-section.module';
import { CollectionsModule } from '../collections/collections.module';
import { ListSectionService } from '../list-section/services/list-section.service';

@NgModule({
  providers: [ListSectionService],
  declarations: [CollectionsSectionComponent],
  exports: [CollectionsSectionComponent],
  imports: [CommonModule, ListSectionModule, CollectionsModule],
})
export class CollectionsSectionModule {}
