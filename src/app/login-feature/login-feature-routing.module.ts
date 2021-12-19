import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFeatureComponent } from './login-feature.component';

const routes: Routes = [
  {
    path: '',
    component: LoginFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginFeatureRoutingModule {}
