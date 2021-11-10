import { ButtonActionInterface } from './button-action.interface';

export interface DialogInterface {
  title?: string;
  text?: string;
  closeButton?: boolean;
  actions?: ButtonActionInterface[];
}
