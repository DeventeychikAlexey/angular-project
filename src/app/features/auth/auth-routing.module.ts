import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@features/auth/pages/login/login.component';
import { RegisterComponent } from '@features/auth/pages/register/register.component';

const routes: Routes = [
  { path: 'auth', pathMatch: 'full', redirectTo: '/auth/login' },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
