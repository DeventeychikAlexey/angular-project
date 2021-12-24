import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ColorsEnum } from '../enums/colors.enum';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  private config: MatSnackBarConfig = {
    verticalPosition: 'bottom',
    horizontalPosition: 'end',
    panelClass: ColorsEnum.Info,
    duration: 3000,
  };

  constructor(private matSnackBar: MatSnackBar) {}

  openSnackBar(text: string, config?: MatSnackBarConfig) {
    this.matSnackBar.open(text, '', Object.assign(this.config, config));
  }

  navigationError() {
    this.openSnackBar('Navigation error', {
      panelClass: ColorsEnum.Error,
    });
  }
}
