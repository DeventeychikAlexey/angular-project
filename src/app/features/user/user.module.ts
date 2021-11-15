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
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { CollectionEditingPageComponent } from './pages/collection-editing-page/collection-editing-page.component';
import { CollectionSectionComponent } from './components/collection-section/collection-section.component';
import { CollectionSectionCardFormEditComponent } from './components/collection-section-card-form-edit/collection-section-card-form-edit.component';

@NgModule({
  declarations: [
    PageComponent,
    UserHeaderComponent,
    CollectionSectionCardFormComponent,
    CollectionSectionCardFormCreateComponent,
    CollectionPageComponent,
    CollectionEditingPageComponent,
    CollectionSectionComponent,
    CollectionSectionCardFormEditComponent,
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
