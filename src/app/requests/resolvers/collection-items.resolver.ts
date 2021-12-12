import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ItemsRequestService } from '@requests/services/items-request.service';
import { CollectionsService } from '@core/services/collections.service';
import { ResponseInterface } from '@shared/interfaces/response.interface';

@Injectable()
export class CollectionItemsResolver implements Resolve<any> {
  constructor(
    private itemsRequestService: ItemsRequestService,
    private collectionsService: CollectionsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResponseInterface> {
    return this.itemsRequestService
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
