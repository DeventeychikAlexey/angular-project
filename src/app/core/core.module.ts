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
import { UppyService } from '@core/services/uppy.service';
import { ImagesService } from '@core/services/images.service';
import { UsersService } from '@core/services/users.service';
import { ItemsService } from '@core/services/items.service';
import { UsersResolverService } from '@core/services/users-resolver.service';
import { UserCollectionsResolverService } from '@core/services/user-collections-resolver.service';
import { CollectionResolverService } from '@core/services/collection-resolver.service';
import { CollectionItemsResolverService } from '@core/services/collection-items-resolver.service';
import { CollectionsResolverService } from '@core/services/collections-resolver.service';
import { OptionalService } from '@core/services/optional.service';

@NgModule({
  providers: [
    RoutesService,
    SnackBarService,
    CollectionsService,
    TopicsService,
    DialogService,
    LoginService,
    RegisterService,
    UppyService,
    ImagesService,
    ItemsService,
    UsersService,
    UsersResolverService,
    UserCollectionsResolverService,
    CollectionResolverService,
    CollectionItemsResolverService,
    CollectionsResolverService,
    OptionalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptorService,
      multi: true,
    },
  ],
  imports: [HttpClientModule, MatSnackBarModule],
})
export class CoreModule {}
