import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '@features/user/pages/user/user.component';
import { CollectionPageComponent } from '@features/user/pages/collection-page/collection-page.component';

const routes: Routes = [
  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'collection/:id',
    component: CollectionPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
