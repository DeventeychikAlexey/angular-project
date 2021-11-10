import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from '@features/user/user-routing.module';
import { CollectionCreateComponent } from './components/collection-create/collection-create.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UppyComponent } from './components/uppy/uppy.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { CollectionsPageComponent } from './components/collections-page/collections-page.component';
import { TopComponent } from './components/top/top.component';
import { MatChipsModule } from '@angular/material/chips';
import { CollectionFormCardComponent } from './components/collection-form-card/collection-form-card.component';
import { CollectionChangeComponent } from './components/collection-change/collection-change.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';

@NgModule({
  declarations: [
    UserComponent,
    CollectionCreateComponent,
    UppyComponent,
    CollectionsPageComponent,
    TopComponent,
    CollectionFormCardComponent,
    CollectionChangeComponent,
    CollectionPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
  ],
})
export class UserModule {}
