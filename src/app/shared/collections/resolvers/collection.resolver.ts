import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionRequestService } from '../services/collection-request.service';
import { CollectionService } from '../services/collection.service';
import { CollectionInterface } from '../interfaces/collection.interface';
import { tap } from 'rxjs/operators';

@Injectable()
export class CollectionResolver implements Resolve<CollectionInterface> {
  constructor(
    private collectionRequestService: CollectionRequestService,
    private collectionService: CollectionService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CollectionInterface> {
    return this.collectionRequestService
      .getCollectionById(+route.paramMap.get('collectionId')!)
      .pipe(
        tap((collection) => {
          this.collectionService.collection = collection;
        })
      );
  }
}
