import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoCheck, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable, Subject } from 'rxjs';
import { UserInterface } from '@core/interfaces/user.interface';
import { ResponseInterface } from '@core/interfaces/response.interface';
import { LoginBodyInterface } from '@core/interfaces/login-body.interface';
import { RegisterBodyInterface } from '@core/interfaces/register-body.interface';

@Injectable()
export class AuthService {
  private _token: string | null;
  private _user: UserInterface | null = null;
  headerAuthorization = new HttpHeaders();
  userSubscriber: Subject<undefined> = new Subject<undefined>();

  constructor(private http: HttpClient) {
    this._token = '';
    const token = localStorage.getItem('token');
    if (token) {
      const observer = {
        error: () => {
          this.removeToken();
        },
      };
      this.pullToken(token).subscribe(observer);
    }
  }

  get isLoggedIn(): boolean {
    return !!this._token;
  }

  get user(): UserInterface | null {
    return this._user;
  }

  private pullToken(token: string): Observable<undefined> {
    return new Observable<undefined>((subscriber) => {
      this._token = token;
      this.headerAuthorization = this.headerAuthorization.set(
        'Authorization',
        `Bearer ${token}`
      );
      const observer = {
        next: (resp: ResponseInterface) => {
          this._user = resp.msg as UserInterface;
          this.userSubscriber.next();
        },
        error: (error: Error) => {
          subscriber.error(error);
        },
        complete: () => {
          subscriber.complete();
        },
      };
      this.pullUser().subscribe(observer);
    });
  }

  setToken(token: string): Observable<undefined> {
    return new Observable<undefined>((subscriber) => {
      localStorage.setItem('token', token);
      const observer = {
        error: (error: Error) => {
          subscriber.error(error);
        },
        complete: () => {
          subscriber.complete();
        },
      };
      this.pullToken(token).subscribe(observer);
    });
  }

  removeToken(): Observable<undefined> {
    return new Observable<undefined>((subscriber) => {
      this._token = '';
      localStorage.removeItem('token');
      subscriber.complete();
    });
  }

  private pullUser(): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'back/auth/',
      {},
      { headers: this.headerAuthorization }
    );
  }

  login(ops: LoginBodyInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'back/auth/login',
      ops
    );
  }

  register(ops: RegisterBodyInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'back/auth/register',
      ops
    );
  }
}
