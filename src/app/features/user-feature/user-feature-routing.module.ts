import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserResolver } from '../../shared/user/resolvers/user.resolver';
import { UserCollectionsResolver } from '../../shared/user/resolvers/user-collections.resolver';
import { AuthorizationGuard } from '../authorization-feature/guards/authorization.guard';

const routes: Routes = [
  {
    path: ':userId',
    resolve: { user: UserResolver, userCollections: UserCollectionsResolver },
    children: [
      {
        path: '',
        component: UserComponent,
      },
      {
        path: 'create-collection',
        canActivate: [AuthorizationGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFeatureRoutingModule {}
