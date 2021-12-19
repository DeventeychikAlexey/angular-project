import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { ResponseInterface } from '../../interfaces/response.interface';
import { CollectionsRequestService } from '../../collections/services/collections-request.service';

@Injectable({
  providedIn: 'root',
})
export class UserCollectionsResolver implements Resolve<any> {
  constructor(
    private usersService: UsersService,
    private collectionsRequestService: CollectionsRequestService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResponseInterface> {
    return this.collectionsRequestService
      .getUserCollections(this.usersService.user.id)
      .pipe(
        map((response) => {
          return response.msg;
        }),
        switchMap((collections) => {
          this.usersService.collections = collections;

          return of(collections);
        })
      );
  }
}
