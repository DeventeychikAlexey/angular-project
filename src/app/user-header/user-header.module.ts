import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHeaderComponent } from './user-header.component';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [UserHeaderComponent],
  exports: [UserHeaderComponent],
  imports: [CommonModule, RouterModule, MatChipsModule],
})
export class UserHeaderModule {}
