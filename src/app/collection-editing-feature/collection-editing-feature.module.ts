import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionEditingFeatureComponent } from './collection-editing-feature.component';
import { UserHeaderModule } from '../user-header/user-header.module';
import { CollectionSectionModule } from '../collection-section/collection-section.module';
import { CollectionSectionCardFormEditModule } from '../collection-section-card-form-edit/collection-section-card-form-edit.module';
import { CollectionEditingFeatureRoutingModule } from './collection-editing-feature-routing.module';
import { CollectionService } from '../collection/services/collection.service';
import { CollectionResolver } from '../collection/resolvers/collection.resolver';

@NgModule({
  providers: [CollectionService, CollectionResolver],
  declarations: [CollectionEditingFeatureComponent],
  imports: [
    CommonModule,
    UserHeaderModule,
    CollectionSectionModule,
    CollectionSectionCardFormEditModule,
    CollectionEditingFeatureRoutingModule,
  ],
})
export class CollectionEditingFeatureModule {}
