import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { UserRequestService } from '../services/user-request.service';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class UsersResolver implements Resolve<UserInterface[]> {
  constructor(
    private userRequestService: UserRequestService,
    private userService: UserService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserInterface[]> {
    return this.userRequestService.getUsers().pipe(
      tap((users) => {
        this.userService.users = users;
      })
    );
  }
}
