import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { environment } from '@environment/environment';

@Injectable()
export class ItemsRequestService {
  constructor(private http: HttpClient) {}

  getItemById(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(environment.baseURI + 'item/' + id);
  }

  getCollectionItems(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'items/' + id
    );
  }

  getItems(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(environment.baseURI + 'items');
  }

  removeItem(id: number): Observable<ResponseInterface> {
    return this.http.delete<ResponseInterface>(
      environment.baseURI + 'item/' + id
    );
  }
}
