import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from '@features/user/user-routing.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, SharedModule, UserRoutingModule],
})
export class UserModule {}
