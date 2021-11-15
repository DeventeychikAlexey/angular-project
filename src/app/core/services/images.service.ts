import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '@shared/interfaces/response.interface';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImagesService {
  readonly pathToLoadingImage = './assets/images/load.gif';

  constructor(private http: HttpClient) {}

  getImage(id: number): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'image/' + id
    );
  }
}
