import { MatSnackBarConfig } from '@angular/material/snack-bar';

export interface SnackBarBodyInterface {
  message: string;
  config?: MatSnackBarConfig;
}
