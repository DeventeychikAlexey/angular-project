import { ButtonActionInterface } from '@shared/interfaces/button-action.interface';

export interface DialogInterface {
  title?: string;
  text?: string;
  closeButton?: boolean;
  actions?: ButtonActionInterface[];
}
