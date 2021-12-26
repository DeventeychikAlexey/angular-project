import { Injectable } from '@angular/core';
import { CollectionType } from '../types/collection.type';
import { CollectionInterface } from '../interfaces/collection.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  collection: CollectionType = null;
  collections: CollectionInterface[] = [];
  updaterCollections$ = new Subject();
}
