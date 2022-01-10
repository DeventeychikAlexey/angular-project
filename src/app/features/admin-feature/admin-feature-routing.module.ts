import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { UsersResolver } from '../../shared/user/resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { users: UsersResolver },
    canActivate: [AdminGuard],
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminFeatureRoutingModule {}
