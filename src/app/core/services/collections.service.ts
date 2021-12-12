import { Injectable } from '@angular/core';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { ItemInterface } from '@shared/interfaces/item.interface';
import { Subject } from 'rxjs';

@Injectable()
export class CollectionsService {
  collection!: CollectionInterface;
  items: ItemInterface[] = [];
  updaterCollections$ = new Subject();
}
