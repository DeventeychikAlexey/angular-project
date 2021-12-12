import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/guest/pages/home/home.component';
import { CollectionsResolver } from '@requests/resolvers/collections.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    resolve: { collections: CollectionsResolver },
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule {}
