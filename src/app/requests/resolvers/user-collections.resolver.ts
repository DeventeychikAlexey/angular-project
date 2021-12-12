import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '@core/services/users.service';
import { CollectionsRequestService } from '@requests/services/collections-request.service';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { map, switchMap } from 'rxjs/operators';

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
