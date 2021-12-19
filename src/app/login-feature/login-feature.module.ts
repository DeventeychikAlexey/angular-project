import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { LoginFeatureRoutingModule } from './login-feature-routing.module';
import { LoginFeatureComponent } from './login-feature.component';

@NgModule({
  declarations: [LoginFeatureComponent],
  imports: [CommonModule, LoginModule, LoginFeatureRoutingModule],
})
export class LoginFeatureModule {}
