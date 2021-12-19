import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeatureComponent } from './home-feature.component';
import { HomeFeatureRoutingModule } from './home-feature-routing.module';
import { CollectionsSectionModule } from '../collections-section/collections-section.module';
import { CollectionsService } from '../collections/services/collections.service';
import { CollectionsResolver } from '../collections/resolvers/collections.resolver';

@NgModule({
  providers: [CollectionsService, CollectionsResolver],
  declarations: [HomeFeatureComponent],
  imports: [CommonModule, HomeFeatureRoutingModule, CollectionsSectionModule],
})
export class HomeFeatureModule {}
