import { Injectable } from '@angular/core';
import { LoginBodyInterface } from '@shared/interfaces/login-body.interface';
import { Observable } from 'rxjs';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginRequestService {
  constructor(private http: HttpClient) {}

  login(body: LoginBodyInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'auth/login',
      body
    );
  }
}
