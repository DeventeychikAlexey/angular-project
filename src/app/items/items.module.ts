import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemModule } from '../item/item.module';

@NgModule({
  declarations: [ItemsComponent],
  exports: [ItemsComponent],
  imports: [CommonModule, ItemModule],
})
export class ItemsModule {}
