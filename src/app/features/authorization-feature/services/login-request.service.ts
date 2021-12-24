import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoginFormBodyInterface } from '../interfaces/login-form-body.interface';
import { UserInterface } from '../../../shared/user/interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class LoginRequestService {
  constructor(private http: HttpClient) {}

  getUserToken(body: LoginFormBodyInterface): Observable<string> {
    return this.http.post(environment.baseURI + 'auth/login', body, {
      responseType: 'text',
    });
  }

  getUserByToken(): Observable<UserInterface> {
    return this.http.post<UserInterface>(environment.baseURI + 'auth/', {});
  }
}
