import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environment/environment';

import { ResponseInterface } from '@shared/interfaces/response.interface';

import { Observable } from 'rxjs';

@Injectable()
export class TopicsService {
  constructor(private http: HttpClient) {}

  getTopics(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(
      environment.baseURI + 'back/topics'
    );
  }
}
