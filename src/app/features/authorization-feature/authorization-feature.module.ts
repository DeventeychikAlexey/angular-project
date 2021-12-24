import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationFeatureRoutingModule } from './authorization-feature-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthorizationFeatureRoutingModule,
    MatCardModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthorizationFeatureModule {}
