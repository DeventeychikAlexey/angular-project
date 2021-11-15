import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';

import { ResponseInterface } from '@shared/interfaces/response.interface';

import { Observable, Subject } from 'rxjs';
import { RightsService } from '@core/services/rights.service';
import { CollectionFormBodyInterface } from '@shared/interfaces/collection-form-body.interface';

@Injectable()
export class CollectionsService {
  updaterCollections$ = new Subject();

  constructor(private http: HttpClient, private rightsService: RightsService) {}

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
        this.rightsService.userOrAdmin +
        '/collections/' +
        id,
      body
    );
  }

  editCollection(
    body: CollectionFormBodyInterface
  ): Observable<ResponseInterface> {
    return this.http.put<ResponseInterface>(
      environment.baseURI + 'user/collections',
      body
    );
  }

  removeCollection(id: number): Observable<ResponseInterface> {
    return this.http.delete<ResponseInterface>(
      environment.baseURI + this.rightsService.userOrAdmin + '/collection/' + id
    );
  }
}
