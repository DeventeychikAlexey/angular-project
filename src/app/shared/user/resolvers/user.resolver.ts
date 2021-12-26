import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { UserRequestService } from '../services/user-request.service';
import { tap } from 'rxjs/operators';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class UserResolver implements Resolve<UserInterface> {
  constructor(
    private userService: UserService,
    private userRequestService: UserRequestService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserInterface> {
    return this.userRequestService
      .getUserById(+route.paramMap.get('userId')!)
      .pipe(
        tap((user) => {
          this.userService.user = user;
        })
      );
  }
}
