import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterFormBodyInterface } from '../interfaces/register-form-body.interface';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RegisterRequestService {
  constructor(private http: HttpClient) {}

  register(ops: RegisterFormBodyInterface): Observable<boolean> {
    return this.http.post<boolean>(environment.baseURI + 'auth/register', ops);
  }
}
