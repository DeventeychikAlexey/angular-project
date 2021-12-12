import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterBodyInterface } from '@shared/interfaces/register-body.interface';
import { Observable } from 'rxjs';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { environment } from '@environment/environment';

@Injectable()
export class RegisterRequestService {
  constructor(private http: HttpClient) {}

  register(ops: RegisterBodyInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'auth/register',
      ops
    );
  }
}
