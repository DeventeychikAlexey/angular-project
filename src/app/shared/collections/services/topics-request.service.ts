import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TopicInterface } from '../interfaces/topic.interface';

@Injectable({ providedIn: 'root' })
export class TopicsRequestService {
  constructor(private http: HttpClient) {}

  getTopics(): Observable<TopicInterface[]> {
    return this.http.get<TopicInterface[]>(environment.baseURI + 'topics');
  }
}
