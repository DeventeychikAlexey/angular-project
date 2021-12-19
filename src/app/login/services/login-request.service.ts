import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { LoginBodyInterface } from '../../interfaces/login-body.interface';
import { ResponseInterface } from '../../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class LoginRequestService {
  constructor(private http: HttpClient) {}

  login(body: LoginBodyInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'auth/login',
      body
    );
  }
}
