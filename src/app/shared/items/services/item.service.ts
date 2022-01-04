import { Injectable } from '@angular/core';
import { ItemType } from '../types/item.type';
import { ItemInterface } from '../interfaces/item.interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CollectionService } from '../../collections/services/collection.service';

@Injectable()
export class ItemService {
  item: ItemType = null;
  items: ItemInterface[] = [];
  updaterItems$ = new Subject();

  constructor(
    private router: Router,
    private collectionService: CollectionService
  ) {}

  goToCollectionPage(): Promise<boolean> {
    return this.router.navigate([
      '/',
      'collection',
      this.item?.id_collection || this.collectionService.collection?.id,
    ]);
  }
}
