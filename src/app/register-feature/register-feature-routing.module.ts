import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFeatureComponent } from './register-feature.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFeatureRoutingModule {}
