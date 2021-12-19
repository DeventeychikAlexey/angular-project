import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionEditingFeatureComponent } from './collection-editing-feature.component';
import { CollectionResolver } from '../collection/resolvers/collection.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { collection: CollectionResolver },
    children: [
      {
        path: '',
        component: CollectionEditingFeatureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionEditingFeatureRoutingModule {}
