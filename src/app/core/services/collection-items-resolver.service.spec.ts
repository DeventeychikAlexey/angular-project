import { TestBed } from '@angular/core/testing';

import { CollectionItemsResolverService } from './collection-items-resolver.service';

describe('CollectionItemsResolverService', () => {
  let service: CollectionItemsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionItemsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
