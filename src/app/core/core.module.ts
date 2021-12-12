import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RoutesService } from '@core/services/routes.service';
import { SnackBarService } from '@core/services/snack-bar.service';
import { CollectionsService } from '@core/services/collections.service';
import { TopicsService } from '@core/services/topics.service';
import { DialogService } from '@core/services/dialog.service';
import { AuthorizationInterceptor } from '@core/interceptors/authorization.interceptor';
import { LoginService } from '@core/services/login.service';
import { UppyService } from '@core/services/uppy.service';
import { ImagesService } from '@core/services/images.service';
import { UsersService } from '@core/services/users.service';
import { ItemsService } from '@core/services/items.service';
import { OptionalService } from '@core/services/optional.service';

@NgModule({
  providers: [
    RoutesService,
    SnackBarService,
    CollectionsService,
    TopicsService,
    DialogService,
    LoginService,
    UppyService,
    ImagesService,
    ItemsService,
    UsersService,
    OptionalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
  ],
  imports: [HttpClientModule, MatSnackBarModule],
})
export class CoreModule {}
