import { TestBed } from '@angular/core/testing';

import { CollectionResolverService } from './collection-resolver.service';

describe('CollectionResolverService', () => {
  let resolver: CollectionResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CollectionResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
