import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsRequestService } from './services/collections-request.service';
import { ItemsRequestService } from '@requests/services/items-request.service';
import { CollectionItemsResolver } from '@requests/resolvers/collection-items.resolver';
import { CollectionResolver } from '@requests/resolvers/collection.resolver';
import { UsersResolver } from '@requests/resolvers/users.resolver';
import { UserCollectionsResolver } from '@requests/resolvers/user-collections.resolver';
import { ImagesRequestService } from '@requests/services/images-request.service';
import { LoginRequestService } from '@requests/services/login-request.service';
import { RegisterRequestService } from '@requests/services/register-request.service';
import { CollectionsResolver } from '@requests/resolvers/collections.resolver';

@NgModule({
  providers: [
    CollectionsRequestService,
    ItemsRequestService,
    CollectionItemsResolver,
    CollectionResolver,
    CollectionsResolver,
    UsersResolver,
    UserCollectionsResolver,
    ImagesRequestService,
    LoginRequestService,
    RegisterRequestService,
  ],
  declarations: [],
  imports: [CommonModule],
})
export class RequestsModule {}
