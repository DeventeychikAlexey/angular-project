import { TestBed } from '@angular/core/testing';

import { CollectionItemsResolver } from './collection-items.resolver';

describe('CollectionItemsResolver', () => {
  let resolver: CollectionItemsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CollectionItemsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
