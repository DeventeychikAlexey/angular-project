import { Injectable } from '@angular/core';
import Uppy from '@uppy/core';

@Injectable()
export class UppyService {
  uppy: Uppy = new Uppy();
}
