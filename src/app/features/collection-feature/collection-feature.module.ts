import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionFeatureRoutingModule } from './collection-feature-routing.module';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';
import { SharedModule } from '../../shared/shared.module';
import { CollectionResolver } from '../../shared/collections/resolvers/collection.resolver';
import { CollectionService } from '../../shared/collections/services/collection.service';
import { CollectionEditComponent } from './components/collection-edit/collection-edit.component';
import { TopicsService } from '../../shared/collections/services/topics.service';
import { TopicsResolver } from '../../shared/collections/resolvers/topics.resolver';
import { ItemService } from '../../shared/items/services/item.service';
import { CollectionItemsResolver } from '../../shared/items/resolvers/collection-items.resolver';
import { ItemCreateComponent } from './components/item-create/item-create.component';

@NgModule({
  providers: [
    CollectionResolver,
    CollectionService,
    TopicsService,
    TopicsResolver,
    ItemService,
    CollectionItemsResolver,
  ],
  declarations: [CollectionViewComponent, CollectionEditComponent, ItemCreateComponent],
  imports: [CommonModule, CollectionFeatureRoutingModule, SharedModule],
})
export class CollectionFeatureModule {}
