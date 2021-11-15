import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '@features/user/pages/page/page.component';

const routes: Routes = [
  {
    path: 'user',
    children: [{ path: ':id', component: PageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
