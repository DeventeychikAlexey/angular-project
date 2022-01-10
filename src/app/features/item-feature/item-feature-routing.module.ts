import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ItemResolver } from '../../shared/items/resolvers/item.resolver';

const routes: Routes = [
  {
    path: ':itemId',
    resolve: { item: ItemResolver },
    children: [
      { path: '', component: ItemViewComponent },
      {
        path: 'edit',
        children: [{ path: '', component: ItemEditComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemFeatureRoutingModule {}
