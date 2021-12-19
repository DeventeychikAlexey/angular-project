import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionService } from '../services/collection.service';
import { ItemInterface } from '../../interfaces/item.interface';

@Injectable({ providedIn: 'root' })
export class CollectionItemsResolver implements Resolve<ItemInterface[]> {
  constructor(private collectionService: CollectionService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ItemInterface[]> {
    return this.collectionService.updateItems(
      +route.paramMap.get('collectionId')!
    );
  }
}
