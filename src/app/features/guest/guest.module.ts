import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '@shared/shared.module';
import { GuestRoutingModule } from '@features/guest/guest-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, GuestRoutingModule, SharedModule],
})
export class GuestModule {}
