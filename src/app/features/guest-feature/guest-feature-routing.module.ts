import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionsResolver } from '../../shared/collections/resolvers/collections.resolver';

const routes: Routes = [
  {
    path: 'home',
    resolve: { collections: CollectionsResolver },
    children: [{ path: '', component: HomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestFeatureRoutingModule {}
