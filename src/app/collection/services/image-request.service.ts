import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { ResponseInterface } from '../../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class ImageRequestService {
  constructor(private http: HttpClient) {}

  getImage(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'image/' + id
    );
  }
}
