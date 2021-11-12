import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';

// import { UserInterface } from '@shared/interfaces/user.interface';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { LoginBodyInterface } from '@shared/interfaces/login-body.interface';

import { Observable, Subject, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
  private token = '';
  user: any | null = null;
  needRoutesUpdate$ = new Subject();

  constructor(private http: HttpClient) {
    this.initializeTokenAndUser();
  }

  get isLoggedIn() {
    return !!this.token && this.user != null;
  }

  private initializeTokenAndUser() {
    const token = localStorage.getItem('token');

    if (token) {
      of(token)
        .pipe(
          switchMap((token) => {
            return of(this.updateToken(token));
          }),
          switchMap(() => {
            return this.updateUser();
          })
        )
        .subscribe();
    }
  }

  updateToken(token: string) {
    localStorage.setItem('token', token);

    this.token = token;
  }

  uploadUser(): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'back/auth/',
      {}
    );
  }

  updateUser() {
    return this.uploadUser().pipe(
      map((resp) => resp.msg),
      switchMap((user) => {
        this.user = user;

        this.needRoutesUpdate$.next();

        return of();
      }),
      catchError(() => {
        this.logout();

        return of();
      })
    );
  }

  private removeToken() {
    this.token = '';

    localStorage.removeItem('token');
  }

  private removeUser() {
    this.user = null;
  }

  logout() {
    this.removeToken();
    this.removeUser();
    this.needRoutesUpdate$.next();
  }

  login(ops: LoginBodyInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'back/auth/login',
      ops
    );
  }
}