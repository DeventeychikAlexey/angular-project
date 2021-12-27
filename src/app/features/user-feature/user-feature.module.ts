import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeatureRoutingModule } from './user-feature-routing.module';
import { UserComponent } from './components/user/user.component';
import { CollectionService } from '../../shared/collections/services/collection.service';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../shared/user/services/user.service';
import { UserResolver } from '../../shared/user/resolvers/user.resolver';
import { UserCollectionsResolver } from '../../shared/user/resolvers/user-collections.resolver';
import { AuthorizationGuard } from '../authorization-feature/guards/authorization.guard';
import { CollectionCreateComponent } from './components/collection-create/collection-create.component';
import { TopicsService } from '../../shared/collections/services/topics.service';
import { TopicsResolver } from '../../shared/collections/resolvers/topics.resolver';

@NgModule({
  providers: [
    CollectionService,
    UserService,
    UserResolver,
    UserCollectionsResolver,
    AuthorizationGuard,
    TopicsService,
    TopicsResolver,
  ],
  declarations: [UserComponent, CollectionCreateComponent],
  imports: [CommonModule, UserFeatureRoutingModule, SharedModule],
})
export class UserFeatureModule {}
