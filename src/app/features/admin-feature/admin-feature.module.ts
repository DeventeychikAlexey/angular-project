import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { AdminFeatureRoutingModule } from './admin-feature-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../shared/user/services/user.service';
import { UsersResolver } from '../../shared/user/resolvers/users.resolver';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  providers: [UserService, UsersResolver],
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminFeatureRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    MatButtonModule,
    MatSortModule,
  ],
})
export class AdminFeatureModule {}
