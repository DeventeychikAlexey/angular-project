import { DialogActionInterface } from './dialog-action.interface';

export interface DialogInterface {
  title?: string;
  text?: string;
  closeButton?: boolean;
  actions?: DialogActionInterface[];
}
