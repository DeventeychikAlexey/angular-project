import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../shared/user/services/user.service';
import { LoginService } from '../../authorization-feature/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private loginService: LoginService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return (
      this.loginService.isLoggedIn &&
      this.userService.isAdmin(this.userService.user!)
    );
  }
}
