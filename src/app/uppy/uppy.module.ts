import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppyComponent } from './uppy.component';

@NgModule({
  declarations: [UppyComponent],
  exports: [UppyComponent],
  imports: [CommonModule],
})
export class UppyModule {}
