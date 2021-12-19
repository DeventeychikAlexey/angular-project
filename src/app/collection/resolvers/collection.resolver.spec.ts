import { TestBed } from '@angular/core/testing';

import { CollectionResolver } from './collection.resolver';

describe('CollectionResolver', () => {
  let resolver: CollectionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CollectionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
