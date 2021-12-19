import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionFeatureComponent } from './collection-feature.component';
import { CollectionResolver } from '../collection/resolvers/collection.resolver';
import { CollectionItemsResolver } from '../collection/resolvers/collection-items.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { collection: CollectionResolver },
    children: [
      {
        path: '',
        resolve: { collectionItems: CollectionItemsResolver },
        children: [
          {
            path: '',
            component: CollectionFeatureComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionFeatureRoutingModule {}
