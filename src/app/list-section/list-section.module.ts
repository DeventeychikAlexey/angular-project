import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSectionComponent } from './list-section.component';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  declarations: [ListSectionComponent],
  exports: [ListSectionComponent],
  imports: [CommonModule, FilterModule],
})
export class ListSectionModule {}
