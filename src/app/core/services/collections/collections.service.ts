import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { ResponseInterface } from '@core/interfaces/response.interface';
import { AuthService } from '@core/services/auth/auth.service';
import { CreateCollectionBodyInterface } from '@core/interfaces/create-collection-body.interface';
import thumbnail from './thumbnail';
import { RightInterface } from '@core/interfaces/right.interface';

@Injectable()
export class CollectionsService {
  readonly thumbnail: string = thumbnail;
  updaterCollections: Subject<undefined> = new Subject<undefined>();
  constructor(private http: HttpClient, private authService: AuthService) {}

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
      body,
      {
        headers: this.authService.headerAuthorization,
      }
    );
  }

  removeCollection(id: number, right: RightInterface): Observable<any> {
    return this.http.delete(
      environment.baseURI + 'back/' + right.name + '/collection/' + id,
      { headers: this.authService.headerAuthorization }
    );
  }

  getImage(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'back/image/' + id
    );
  }
}
