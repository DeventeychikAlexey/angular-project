import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeatureComponent } from './home-feature.component';
import { CollectionsResolver } from '../collections/resolvers/collections.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { collections: CollectionsResolver },
    children: [
      {
        path: '',
        component: HomeFeatureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFeatureRoutingModule {}
