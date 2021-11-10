import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';

import { ResponseInterface } from '@shared/interfaces/response.interface';
import { CreateCollectionBodyInterface } from '@shared/interfaces/create-collection-body.interface';

import thumbnail from '@shared/variables/thumbnail';

import { Observable, Subject } from 'rxjs';
import { UserRightsService } from '@core/services/user-rights.service';

@Injectable()
export class CollectionsService {
  readonly thumbnail = thumbnail;

  updaterCollections$ = new Subject();

  constructor(
    private http: HttpClient,
    private userRights: UserRightsService
  ) {}

  getCollectionById(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'back/collection/' + id
    );
  }

  getUserCollections(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'back/collections/' + id
    );
  }

  createCollection(
    body: CreateCollectionBodyInterface
  ): Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(
      environment.baseURI + 'back/user/collections',
      body
    );
  }

  editCollection(
    body: CreateCollectionBodyInterface
  ): Observable<ResponseInterface> {
    return this.http.put<ResponseInterface>(
      environment.baseURI + 'back/user/collections',
      body
    );
  }

  removeCollection(id: number): Observable<ResponseInterface> {
    return this.http.delete<ResponseInterface>(
      environment.baseURI +
        'back/' +
        this.userRights.userOrAdmin +
        '/collection-page/' +
        id
    );
  }

  getImage(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'back/image/' + id
    );
  }
}
