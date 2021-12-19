import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [CollectionComponent],
  exports: [CollectionComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    DialogModule,
  ],
})
export class CollectionModule {}
