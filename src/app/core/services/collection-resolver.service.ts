import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CollectionsService } from '@core/services/collections.service';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { map, switchMap } from 'rxjs/operators';
import { UsersService } from '@core/services/users.service';

@Injectable()
export class CollectionResolverService implements Resolve<ResponseInterface> {
  constructor(
    private collectionsService: CollectionsService,
    private usersService: UsersService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResponseInterface> {
    return this.collectionsService
      .getCollectionById(+route.paramMap.get('collectionId')!)
      .pipe(
        map((response) => {
          return response.msg;
        }),
        switchMap((collection) => {
          if (
            !this.usersService.collections.find((userCollection) => {
              return userCollection.id === collection.id;
            })
          ) {
            throw new Error(
              `This collection doesn't belong to user with id = ${this.usersService.user.id}`
            );
          }

          this.collectionsService.collection = collection;

          return of(collection);
        })
      );
  }
}
