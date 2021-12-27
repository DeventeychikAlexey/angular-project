import { TestBed } from '@angular/core/testing';

import { TopicsRequestService } from './topics-request.service';

describe('TopicsService', () => {
  let service: TopicsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
