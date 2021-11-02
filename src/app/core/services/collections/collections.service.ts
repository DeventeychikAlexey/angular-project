import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { ResponseInterface } from '@core/interfaces/response.interface';
import { AuthService } from '@core/services/auth/auth.service';
import { CreateCollectionBodyInterface } from '@core/interfaces/create-collection-body.interface';
import thumbnail from './thumbnail';

@Injectable()
export class CollectionsService {
  readonly thumbnail: string = thumbnail;
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

  getImage(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'back/image/' + id
    );
  }
}
