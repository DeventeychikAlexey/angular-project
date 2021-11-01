import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { ResponseInterface } from '@core/interfaces/response.interface';

@Injectable()
export class TopicsService {
  constructor(private http: HttpClient) {}

  getTopics(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'back/topics'
    );
  }
}
