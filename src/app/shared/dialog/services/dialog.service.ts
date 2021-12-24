import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(component: ComponentType<unknown>) {
    this.dialog.open(component);
  }
}
