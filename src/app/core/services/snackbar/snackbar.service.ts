import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export type snackBarPosition = {
  horizontal: MatSnackBarHorizontalPosition;
  vertical: MatSnackBarVerticalPosition;
};

@Injectable()
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackbar(text: string, position: snackBarPosition) {
    this._snackBar.open(text, 'Close', {
      horizontalPosition: position.horizontal,
      verticalPosition: position.vertical,
    });
  }
}
