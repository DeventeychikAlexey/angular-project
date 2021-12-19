import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeatureRoutingModule } from './user-feature-routing.module';
import { UserFeatureComponent } from './user-feature.component';
import { UserHeaderModule } from '../user-header/user-header.module';
import { CollectionSectionCardFormCreateModule } from '../collection-section-card-form-create/collection-section-card-form-create.module';
import { CollectionsSectionModule } from '../collections-section/collections-section.module';

@NgModule({
  declarations: [UserFeatureComponent],
  imports: [
    CommonModule,
    UserFeatureRoutingModule,
    UserHeaderModule,
    CollectionSectionCardFormCreateModule,
    CollectionsSectionModule,
  ],
})
export class UserFeatureModule {}
