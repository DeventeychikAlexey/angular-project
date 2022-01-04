import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';
import { CollectionResolver } from '../../shared/collections/resolvers/collection.resolver';
import { CollectionEditComponent } from './components/collection-edit/collection-edit.component';
import { TopicsResolver } from '../../shared/collections/resolvers/topics.resolver';
import { CollectionItemsResolver } from '../../shared/items/resolvers/collection-items.resolver';
import { ItemCreateComponent } from './components/item-create/item-create.component';

const routes: Routes = [
  {
    path: ':collectionId',
    resolve: { collection: CollectionResolver, items: CollectionItemsResolver },
    children: [
      { path: '', component: CollectionViewComponent },
      {
        path: 'edit',
        resolve: { topics: TopicsResolver },
        children: [{ path: '', component: CollectionEditComponent }],
      },
      {
        path: 'create-item',
        children: [{ path: '', component: ItemCreateComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionFeatureRoutingModule {}
