import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';

import { UserInterface } from '@shared/interfaces/user.interface';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { LoginBodyInterface } from '@shared/interfaces/login-body.interface';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoginService {
  private token = '';
  user: UserInterface | null = null;
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
      this.updateToken(token);
      this.updateUser().subscribe();
    }
  }

  updateToken(token: string) {
    this.token = token;
  }

  private uploadUser(): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'back/auth/',
      {}
    );
  }

  updateUser(): Observable<ResponseInterface> {
    return new Observable((subscriber) => {
      this.uploadUser().subscribe(
        (resp) => {
          this.user = resp.msg as UserInterface;
        },
        () => {
          this.logout();
        },
        () => {
          this.needRoutesUpdate$.next();
          subscriber.complete();
        }
      );
    });
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
