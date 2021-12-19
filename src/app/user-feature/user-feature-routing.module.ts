import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFeatureComponent } from '../user-feature/user-feature.component';

const routes: Routes = [
  {
    path: '',
    component: UserFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFeatureRoutingModule {}
