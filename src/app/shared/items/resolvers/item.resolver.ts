import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemInterface } from '../interfaces/item.interface';
import { ItemRequestService } from '../services/item-request.service';
import { ItemService } from '../services/item.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ItemResolver implements Resolve<ItemInterface> {
  constructor(
    private itemRequestService: ItemRequestService,
    private itemService: ItemService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ItemInterface> {
    return this.itemRequestService
      .getItemById(+route.paramMap.get('itemId')!)
      .pipe(
        tap((item) => {
          this.itemService.item = item;
        })
      );
  }
}
