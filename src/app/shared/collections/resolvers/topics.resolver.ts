import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TopicsRequestService } from '../services/topics-request.service';
import { TopicsService } from '../services/topics.service';
import { tap } from 'rxjs/operators';
import { TopicInterface } from '../interfaces/topic.interface';

@Injectable()
export class TopicsResolver implements Resolve<TopicInterface[]> {
  constructor(
    private topicsRequestService: TopicsRequestService,
    private topicsService: TopicsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TopicInterface[]> {
    return this.topicsRequestService.getTopics().pipe(
      tap((topics) => {
        this.topicsService.topics = topics;
      })
    );
  }
}
