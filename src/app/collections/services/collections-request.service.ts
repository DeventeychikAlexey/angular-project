import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../../interfaces/response.interface';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CollectionInterface } from '../../collection/interfaces/collection.interface';

@Injectable({
  providedIn: 'root',
})
export class CollectionsRequestService {
  constructor(private http: HttpClient) {}

  getUserCollections(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'collections/' + id
    );
  }

  getAllCollections(): Observable<CollectionInterface[]> {
    return this.http
      .get<ResponseInterface>(environment.baseURI + 'collections')
      .pipe(map((response) => response.msg));
  }
}
