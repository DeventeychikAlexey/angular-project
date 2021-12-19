import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsSectionComponent } from './items-section.component';
import { ListSectionModule } from '../list-section/list-section.module';
import { ItemsModule } from '../items/items.module';
import { ListSectionService } from '../list-section/services/list-section.service';

@NgModule({
  providers: [ListSectionService],
  declarations: [ItemsSectionComponent],
  exports: [ItemsSectionComponent],
  imports: [CommonModule, ListSectionModule, ItemsModule],
})
export class ItemsSectionModule {}
