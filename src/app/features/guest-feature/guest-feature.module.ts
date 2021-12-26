import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestFeatureRoutingModule } from './guest-feature-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { CollectionService } from '../../shared/collections/services/collection.service';
import { CollectionsResolver } from '../../shared/collections/resolvers/collections.resolver';

@NgModule({
  providers: [CollectionService, CollectionsResolver],
  declarations: [HomeComponent],
  imports: [CommonModule, GuestFeatureRoutingModule, SharedModule],
})
export class GuestFeatureModule {}
