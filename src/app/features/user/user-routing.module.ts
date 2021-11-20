import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '@features/user/pages/page/page.component';
import { CollectionPageComponent } from '@features/user/pages/collection-page/collection-page.component';
import { CollectionEditingPageComponent } from '@features/user/pages/collection-editing-page/collection-editing-page.component';
import { UsersResolverService } from '@core/services/users-resolver.service';
import { UserCollectionsResolverService } from '@core/services/user-collections-resolver.service';
import { CollectionResolverService } from '@core/services/collection-resolver.service';
import { CollectionItemsResolverService } from '@core/services/collection-items-resolver.service';

const routes: Routes = [
  {
    path: ':userId',
    resolve: { user: UsersResolverService },
    children: [
      {
        path: '',
        resolve: { userCollections: UserCollectionsResolverService },
        children: [
          {
            path: '',
            component: PageComponent,
          },
          {
            path: 'collection/:collectionId',
            resolve: { collection: CollectionResolverService },
            children: [
              {
                path: '',
                resolve: { collectionItems: CollectionItemsResolverService },
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
