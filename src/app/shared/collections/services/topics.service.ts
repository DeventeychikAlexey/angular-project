import { Injectable } from '@angular/core';
import { TopicInterface } from '../interfaces/topic.interface';

@Injectable()
export class TopicsService {
  topics: TopicInterface[] = [];
}
