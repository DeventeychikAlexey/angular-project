import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { RoutesService } from '@core/services/routes.service';
import { SnackBarService } from '@core/services/snack-bar.service';
import { CollectionsService } from '@core/services/collections.service';
import { TopicsService } from '@core/services/topics.service';
import { DialogService } from '@core/services/dialog.service';
import { AuthorizationInterceptorService } from '@core/services/authorization-interceptor.service';
import { LoginService } from '@core/services/login.service';
import { RegisterService } from '@core/services/register.service';
import { RightsService } from '@core/services/rights.service';
import { UppyService } from '@core/services/uppy.service';
import { ImagesService } from '@core/services/images.service';
import { UsersService } from '@core/services/users.service';

@NgModule({
  providers: [
    RoutesService,
    SnackBarService,
    CollectionsService,
    TopicsService,
    DialogService,
    LoginService,
    RegisterService,
    RightsService,
    UppyService,
    ImagesService,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptorService,
      multi: true,
    },
  ],
  imports: [HttpClientModule, MatSnackBarModule],
})
export class CoreModule {}
