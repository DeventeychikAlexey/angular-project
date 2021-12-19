import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { ResponseInterface } from '../../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class ItemsRequestService {
  constructor(private http: HttpClient) {}

  getCollectionItems(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'items/' + id
    );
  }

  getItems(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(environment.baseURI + 'items');
  }
}
