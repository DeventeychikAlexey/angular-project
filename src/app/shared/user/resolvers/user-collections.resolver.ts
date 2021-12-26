import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { tap } from 'rxjs/operators';
import { CollectionInterface } from '../../collections/interfaces/collection.interface';
import { CollectionRequestService } from '../../collections/services/collection-request.service';
import { CollectionService } from '../../collections/services/collection.service';

@Injectable()
export class UserCollectionsResolver implements Resolve<CollectionInterface[]> {
  constructor(
    private collectionRequestService: CollectionRequestService,
    private collectionService: CollectionService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CollectionInterface[]> {
    return this.collectionRequestService
      .getUserCollections(+route.paramMap.get('userId')!)
      .pipe(
        tap((collections) => {
          this.collectionService.collections = collections;
        })
      );
  }
}
