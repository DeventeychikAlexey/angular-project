import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ItemsService {
  updaterItems$ = new Subject<any>();
}
