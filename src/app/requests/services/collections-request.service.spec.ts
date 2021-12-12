import { TestBed } from '@angular/core/testing';

import { CollectionsRequestService } from './collections-request.service';

describe('CollectionsRequestService', () => {
  let service: CollectionsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
