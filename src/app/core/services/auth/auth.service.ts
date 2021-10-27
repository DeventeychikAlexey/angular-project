import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoCheck, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

export type responseType = { msg: string | userType };
export type loginOptions = { login: string; password: string };
export type registerOptions = {
  name: string;
  login: string;
  password: string;
  password2: string;
};
export type userType = {
  id: number;
  blocked: boolean;
  login: string;
  password: string;
  name: string;
  id_right: number;
};

@Injectable()
export class AuthService implements OnChanges, DoCheck {
  private _token: string | null;
  private _user: userType | null = null;
  headerAuthorization = new HttpHeaders();

  constructor(private http: HttpClient) {
    this._token = '';
    if (localStorage.getItem('token')) {
      this.setToken(localStorage.getItem('token')!).subscribe();
    }
  }

  get isLoggedIn(): boolean {
    return !!this._token;
  }

  get user(): userType | null {
    return this._user;
  }

  setToken(token: string): Observable<undefined> {
    return new Observable<undefined>((subscriber) => {
      this._token = token;
      localStorage.setItem('token', token);
      this.headerAuthorization = this.headerAuthorization.set(
        'Authorization',
        `Bearer ${token}`
      );
      this.pullUser().subscribe((resp: responseType) => {
        if (typeof resp.msg === 'object') this._user = resp.msg;
      });
      subscriber.complete();
    });
  }

  removeToken(): Observable<undefined> {
    return new Observable<undefined>((subscriber) => {
      this._token = '';
      localStorage.removeItem('token');
      subscriber.complete();
    });
  }

  private pullUser(): Observable<responseType> {
    return this.http.post<responseType>(
      environment.baseURI + 'back/auth/',
      {},
      { headers: this.headerAuthorization }
    );
  }

  login(ops: loginOptions): Observable<responseType> {
    return this.http.post<responseType>(
      environment.baseURI + 'back/auth/login',
      ops
    );
  }

  register(ops: registerOptions): Observable<responseType> {
    return this.http.post<responseType>(
      environment.baseURI + 'back/auth/register',
      ops
    );
  }

  ngDoCheck() {
    console.log(this._token);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
