import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';

import { ResponseInterface } from '@shared/interfaces/response.interface';

import { Observable, Subject } from 'rxjs';
import { CollectionFormBodyInterface } from '@shared/interfaces/collection-form-body.interface';
import { CollectionInterface } from '@shared/interfaces/collection.interface';
import { ItemInterface } from '@shared/interfaces/item.interface';
import { UsersService } from '@core/services/users.service';
import { LoginService } from '@core/services/login.service';

@Injectable()
export class CollectionsService {
  updaterCollections$ = new Subject();
  collection!: CollectionInterface;
  items: ItemInterface[] = [];

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
