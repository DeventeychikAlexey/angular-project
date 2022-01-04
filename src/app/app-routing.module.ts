import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './features/authorization-feature/guards/authorization.guard';

const routes: Routes = [
  {
    path: 'auth',
    canLoad: [AuthorizationGuard],
    loadChildren: () =>
      import(
        './features/authorization-feature/authorization-feature.module'
      ).then((module) => module.AuthorizationFeatureModule),
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./features/guest-feature/guest-feature.module').then(
        (module) => module.GuestFeatureModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user-feature/user-feature.module').then(
        (module) => module.UserFeatureModule
      ),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('./features/collection-feature/collection-feature.module').then(
        (module) => module.CollectionFeatureModule
      ),
  },
  {
    path: 'item',
    loadChildren: () =>
      import('./features/item-feature/item-feature.module').then(
        (module) => module.ItemFeatureModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'guest/home',
  },
];

@NgModule({
  providers: [AuthorizationGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
