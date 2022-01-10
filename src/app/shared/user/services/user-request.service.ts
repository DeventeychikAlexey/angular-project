import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(environment.baseURI + 'users/' + id);
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(environment.baseURI + 'users');
  }
}
