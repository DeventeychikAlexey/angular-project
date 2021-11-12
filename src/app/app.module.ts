import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { AuthModule } from '@features/auth/auth.module';
import { UserModule } from '@features/user/user.module';
import { SharedModule } from '@shared/shared.module';
import { GuestModule } from '@features/guest/guest.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    UserModule,
    GuestModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
