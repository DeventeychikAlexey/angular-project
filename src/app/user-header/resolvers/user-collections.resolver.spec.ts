import { TestBed } from '@angular/core/testing';

import { UserCollectionsResolver } from './user-collections.resolver';

describe('UserCollectionsResolver', () => {
  let resolver: UserCollectionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserCollectionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
