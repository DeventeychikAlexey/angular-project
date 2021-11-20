import { TestBed } from '@angular/core/testing';

import { CollectionsResolverService } from './collections-resolver.service';

describe('CollectionsResolverService', () => {
  let service: CollectionsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
