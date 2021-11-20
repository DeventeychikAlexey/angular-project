import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/guest/pages/home/home.component';
import { CollectionsResolverService } from '@core/services/collections-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    resolve: { collections: CollectionsResolverService },
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule {}
