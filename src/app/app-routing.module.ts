import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
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
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
