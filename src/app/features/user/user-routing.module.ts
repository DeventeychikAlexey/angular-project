import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '@features/user/pages/page/page.component';
import { CollectionPageComponent } from '@features/user/pages/collection-page/collection-page.component';
import { CollectionEditingPageComponent } from '@features/user/pages/collection-editing-page/collection-editing-page.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: ':id',
        component: PageComponent,
      },
    ],
  },
  {
    path: 'collection',
    children: [
      {
        path: ':id',
        component: CollectionPageComponent,
      },
      {
        path: 'edit/:id',
        component: CollectionEditingPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
