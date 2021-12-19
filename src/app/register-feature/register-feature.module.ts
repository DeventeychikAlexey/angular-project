import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFeatureComponent } from './register-feature.component';
import { RegisterFeatureRoutingModule } from './register-feature-routing.module';
import { RegisterModule } from '../register/register.module';

@NgModule({
  declarations: [RegisterFeatureComponent],
  imports: [CommonModule, RegisterModule, RegisterFeatureRoutingModule],
})
export class RegisterFeatureModule {}
