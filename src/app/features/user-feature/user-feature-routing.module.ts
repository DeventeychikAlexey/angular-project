import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserResolver } from '../../shared/user/resolvers/user.resolver';
import { UserCollectionsResolver } from '../../shared/user/resolvers/user-collections.resolver';
import { CollectionCreateComponent } from './components/collection-create/collection-create.component';
import { TopicsResolver } from '../../shared/collections/resolvers/topics.resolver';

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
        resolve: { topics: TopicsResolver },
        children: [
          {
            path: '',
            component: CollectionCreateComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFeatureRoutingModule {}
