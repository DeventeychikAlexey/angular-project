import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemInterface } from '../interfaces/item.interface';
import { ItemRequestService } from '../services/item-request.service';
import { tap } from 'rxjs/operators';
import { ItemService } from '../services/item.service';

@Injectable()
export class CollectionItemsResolver implements Resolve<ItemInterface[]> {
  constructor(
    private itemRequestService: ItemRequestService,
    private itemService: ItemService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ItemInterface[]> {
    return this.itemRequestService
      .getCollectionItems(+route.paramMap.get('collectionId')!)
      .pipe(
        tap((items) => {
          this.itemService.items = items;
        })
      );
  }
}
