import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { ItemsService } from '@core/services/items.service';
import { CollectionsService } from '@core/services/collections.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CollectionItemsResolverService implements Resolve<any> {
  constructor(
    private itemsService: ItemsService,
    private collectionsService: CollectionsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResponseInterface> {
    return this.itemsService
      .getCollectionItems(this.collectionsService.collection.id)
      .pipe(
        map((response) => {
          return response.msg;
        }),
        switchMap((collectionItems) => {
          this.collectionsService.items = collectionItems;

          return of(collectionItems);
        })
      );
  }
}
