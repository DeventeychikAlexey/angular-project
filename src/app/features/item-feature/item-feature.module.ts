import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFeatureRoutingModule } from './item-feature-routing.module';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ItemResolver } from '../../shared/items/resolvers/item.resolver';
import { ItemService } from '../../shared/items/services/item.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [ItemResolver, ItemService],
  declarations: [ItemViewComponent, ItemEditComponent],
  imports: [CommonModule, ItemFeatureRoutingModule, SharedModule],
})
export class ItemFeatureModule {}
