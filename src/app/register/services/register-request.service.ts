import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { ResponseInterface } from '../../interfaces/response.interface';
import { RegisterBodyInterface } from '../../interfaces/register-body.interface';

@Injectable({ providedIn: 'root' })
export class RegisterRequestService {
  constructor(private http: HttpClient) {}

  register(ops: RegisterBodyInterface): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'auth/register',
      ops
    );
  }
}
