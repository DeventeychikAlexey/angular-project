import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';

import { RegisterBodyInterface } from '@shared/interfaces/register-body.interface';
import { ResponseInterface } from '@shared/interfaces/response.interface';

import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(ops: RegisterBodyInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'auth/register',
      ops
    );
  }
}
