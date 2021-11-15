import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { PageComponent } from './pages/page/page.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserRoutingModule } from '@features/user/user-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { CollectionSectionCardFormComponent } from './components/collection-section-card-form/collection-section-card-form.component';
import { CollectionSectionCardFormCreateComponent } from './components/collection-section-card-form-create/collection-section-card-form-create.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageComponent,
    UserHeaderComponent,
    CollectionSectionCardFormComponent,
    CollectionSectionCardFormCreateComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatChipsModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
