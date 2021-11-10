import { Injectable } from '@angular/core';
import Uppy from '@uppy/core';

@Injectable()
export class UppyService {
  uppy: Uppy = new Uppy();

  get isImages() {
    return Object.keys(this.uppy.state.files).length > 0;
  }
}
