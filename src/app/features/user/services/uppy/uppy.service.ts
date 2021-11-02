import { Injectable } from '@angular/core';
import Uppy, { UploadResult } from '@uppy/core';
import { Observable } from 'rxjs';

@Injectable()
export class UppyService {
  uppy: Uppy = new Uppy();

  upload(): Observable<UploadResult<Record<string, any>, Record<string, any>>> {
    return new Observable<
      UploadResult<Record<string, any>, Record<string, any>>
    >((subscriber) => {
      this.uppy
        .upload()
        .then((data) =>
          subscriber.next(
            data as UploadResult<Record<string, any>, Record<string, any>>
          )
        )
        .catch((error) => subscriber.error(error))
        .finally(() => subscriber.complete());
    });
  }
}
