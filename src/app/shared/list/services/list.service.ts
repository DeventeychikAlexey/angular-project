import { Injectable } from '@angular/core';

@Injectable()
export class ListService<T> {
  list: Array<T> = [];
}
