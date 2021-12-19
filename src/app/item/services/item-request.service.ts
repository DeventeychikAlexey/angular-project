import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../../interfaces/response.interface';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemRequestService {
  constructor(private http: HttpClient) {}

  getItemById(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(environment.baseURI + 'item/' + id);
  }

  removeItem(id: number): Observable<ResponseInterface> {
    return this.http.delete<ResponseInterface>(
      environment.baseURI + 'item/' + id
    );
  }
}
