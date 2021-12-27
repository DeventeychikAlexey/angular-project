import { Injectable } from '@angular/core';
import { LoginRequestService } from './login-request.service';
import { UserService } from '../../../shared/user/services/user.service';
import { LoginFormBodyInterface } from '../interfaces/login-form-body.interface';
import { merge, Observable } from 'rxjs';
import { concatAll, tap } from 'rxjs/operators';
import { UserInterface } from '../../../shared/user/interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private token?: string;

  constructor(
    private userService: UserService,
    private loginRequestService: LoginRequestService
  ) {}

  get isLoggedIn(): boolean {
    return !!this.token && this.userService.user != null;
  }

  login(body: LoginFormBodyInterface): Observable<string | UserInterface> {
    return merge([
      this.loginRequestService
        .getUserToken(body)
        .pipe(tap((token) => (this.Token = token))),
      this.loginRequestService
        .getUserByToken()
        .pipe(tap((user) => (this.userService.user = user))),
    ]).pipe(concatAll());
  }

  set Token(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
    this.userService.user = null;
    this.userService.needsUpdateHeader$.next();
  }
}
