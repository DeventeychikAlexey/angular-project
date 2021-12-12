import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { environment } from '@environment/environment';

@Injectable()
export class ImagesRequestService {
  constructor(private http: HttpClient) {}

  getImage(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'image/' + id
    );
  }
}
