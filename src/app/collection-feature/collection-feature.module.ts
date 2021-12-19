import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionFeatureComponent } from './collection-feature.component';
import { UserHeaderModule } from '../user-header/user-header.module';
import { CollectionSectionModule } from '../collection-section/collection-section.module';
import { ItemsSectionModule } from '../items-section/items-section.module';
import { CollectionFeatureRoutingModule } from './collection-feature-routing.module';
import { CollectionService } from '../collection/services/collection.service';
import { CollectionResolver } from '../collection/resolvers/collection.resolver';
import { CollectionItemsResolver } from '../collection/resolvers/collection-items.resolver';

@NgModule({
  providers: [CollectionService, CollectionResolver, CollectionItemsResolver],
  declarations: [CollectionFeatureComponent],
  imports: [
    CommonModule,
    UserHeaderModule,
    CollectionSectionModule,
    ItemsSectionModule,
    CollectionFeatureRoutingModule,
  ],
})
export class CollectionFeatureModule {}
