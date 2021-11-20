import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '@core/services/users.service';
import { CollectionsService } from '@core/services/collections.service';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserCollectionsResolverService
  implements Resolve<ResponseInterface>
{
  constructor(
    private usersService: UsersService,
    private collectionsService: CollectionsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResponseInterface> {
    return this.collectionsService
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
