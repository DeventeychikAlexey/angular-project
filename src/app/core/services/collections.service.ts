import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';

import { ResponseInterface } from '@shared/interfaces/response.interface';
// import { CreateCollectionBodyInterface } from '@shared/interfaces/create-collection-body.interface';

import { Observable, Subject } from 'rxjs';
import { RightsService } from '@core/services/rights.service';

@Injectable()
export class CollectionsService {
  updaterCollections$ = new Subject();

  constructor(private http: HttpClient, private rightsService: RightsService) {}

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

  getCollections(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'back/collections'
    );
  }

  // createCollection(
  //   body: CreateCollectionBodyInterface
  // ): Observable<ResponseInterface> {
  //   return this.http.post<ResponseInterface>(
  //     environment.baseURI + 'back/user/collections',
  //     body
  //   );
  // }
  //
  // editCollection(
  //   body: CreateCollectionBodyInterface
  // ): Observable<ResponseInterface> {
  //   return this.http.put<ResponseInterface>(
  //     environment.baseURI + 'back/user/collections',
  //     body
  //   );
  // }

  removeCollection(id: number): Observable<ResponseInterface> {
    return this.http.delete<ResponseInterface>(
      environment.baseURI +
        'back/' +
        this.rightsService.userOrAdmin +
        '/collection-page/' +
        id
    );
  }
}
