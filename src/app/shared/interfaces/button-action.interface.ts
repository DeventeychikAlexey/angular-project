import { ThemePalette } from '@angular/material/core';

export interface ButtonActionInterface {
  title: string;
  handler: Function;
  color: ThemePalette;
}
