import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersResolver } from './user-header/resolvers/users.resolver';
import { UserCollectionsResolver } from './user-header/resolvers/user-collections.resolver';
import { CollectionResolver } from './collection/resolvers/collection.resolver';
import { CollectionItemsResolver } from './collection/resolvers/collection-items.resolver';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home-feature/home-feature.module').then(
        (module) => module.HomeFeatureModule
      ),
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login-feature/login-feature.module').then(
            (module) => module.LoginFeatureModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register-feature/register-feature.module').then(
            (module) => module.RegisterFeatureModule
          ),
      },
    ],
  },
  {
    path: 'user',
    children: [
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
                loadChildren: () =>
                  import('./user-feature/user-feature.module').then(
                    (module) => module.UserFeatureModule
                  ),
              },
            ],
          },
          {
            path: 'collection/:collectionId',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('./collection-feature/collection-feature.module').then(
                    (module) => module.CollectionFeatureModule
                  ),
              },
              {
                path: 'edit',
                loadChildren: () =>
                  import(
                    './collection-editing-feature/collection-editing-feature.module'
                  ).then((module) => module.CollectionEditingFeatureModule),
              },
            ],
          },
        ],
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
