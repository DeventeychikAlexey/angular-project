import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './services/dialog.service';

@NgModule({
  providers: [DialogService],
  declarations: [DialogComponent],
  exports: [DialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class DialogModule {}
