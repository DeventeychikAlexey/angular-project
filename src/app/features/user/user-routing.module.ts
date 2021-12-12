import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '@features/user/pages/page/page.component';
import { CollectionPageComponent } from '@features/user/pages/collection-page/collection-page.component';
import { CollectionEditingPageComponent } from '@features/user/pages/collection-editing-page/collection-editing-page.component';
import { CollectionItemsResolver } from '@requests/resolvers/collection-items.resolver';
import { CollectionResolver } from '@requests/resolvers/collection.resolver';
import { UsersResolver } from '@requests/resolvers/users.resolver';
import { UserCollectionsResolver } from '@requests/resolvers/user-collections.resolver';

const routes: Routes = [
  {
    path: ':userId',
    resolve: { user: UsersResolver },
    children: [
      {
        path: '',
        resolve: { userCollections: UserCollectionsResolver },
        children: [
          {
            path: '',
            component: PageComponent,
          },
          {
            path: 'collection/:collectionId',
            resolve: { collection: CollectionResolver },
            children: [
              {
                path: '',
                resolve: { collectionItems: CollectionItemsResolver },
                children: [
                  {
                    path: '',
                    component: CollectionPageComponent,
                  },
                  {
                    path: 'edit',
                    component: CollectionEditingPageComponent,
                  },
                ],
              },
            ],
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
export class UserRoutingModule {}
