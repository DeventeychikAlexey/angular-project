import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../../interfaces/response.interface';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { CollectionFormBodyInterface } from '../interfaces/collection-form-body.interface';
import { UsersService } from '../../user-header/services/users.service';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class CollectionRequestService {
  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private loginService: LoginService
  ) {}

  getCollectionById(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'collection/' + id
    );
  }

  createCollection(
    id: number,
    body: CollectionFormBodyInterface
  ): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI +
        this.usersService.getUserOrAdmin(this.loginService.user) +
        '/collections/' +
        id,
      body
    );
  }

  editCollection(
    id: number,
    body: CollectionFormBodyInterface
  ): Observable<ResponseInterface> {
    return this.http.put<ResponseInterface>(
      environment.baseURI +
        this.usersService.getUserOrAdmin(this.loginService.user) +
        '/collection/' +
        id,
      body
    );
  }

  removeCollection(id: number): Observable<ResponseInterface> {
    return this.http.delete<ResponseInterface>(
      environment.baseURI +
        this.usersService.getUserOrAdmin(this.loginService.user) +
        '/collection/' +
        id
    );
  }
}
