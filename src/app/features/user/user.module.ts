import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from '@features/user/user-routing.module';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UppyComponent } from './components/uppy/uppy.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [UserComponent, CreateCollectionComponent, UppyComponent],
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
  ],
})
export class UserModule {}
