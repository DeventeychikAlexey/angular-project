import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '@core/services/users.service';
import { LoginService } from '@core/services/login.service';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { environment } from '@environment/environment';
import { CollectionFormBodyInterface } from '@shared/interfaces/collection-form-body.interface';

@Injectable()
export class CollectionsRequestService {
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

  getUserCollections(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'collections/' + id
    );
  }

  getCollections(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'collections'
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
