import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { RoutesService } from '@core/services/routes/routes.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';

@NgModule({
  providers: [AuthService, RoutesService, SnackbarService],
  imports: [HttpClientModule, MatSnackBarModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}