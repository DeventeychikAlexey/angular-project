import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UsersService } from '@core/services/users.service';
import { ResponseInterface } from '@shared/interfaces/response.interface';

@Injectable()
export class UsersResolverService implements Resolve<ResponseInterface> {
  constructor(private usersService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResponseInterface> {
    return this.usersService.getUserById(+route.paramMap.get('userId')!).pipe(
      map((response) => {
        return response.msg;
      }),
      switchMap((user) => {
        this.usersService.user = user;

        return of(user);
      })
    );
  }
}
