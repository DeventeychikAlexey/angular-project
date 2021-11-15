import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(environment.baseURI + 'user/' + id);
  }
}
