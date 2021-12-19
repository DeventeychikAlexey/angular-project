import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../../interfaces/response.interface';

@Injectable({ providedIn: 'root' })
export class TopicsService {
  constructor(private http: HttpClient) {}

  getTopics(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(environment.baseURI + 'topics');
  }
}
