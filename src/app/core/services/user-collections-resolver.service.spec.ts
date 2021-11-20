import { TestBed } from '@angular/core/testing';

import { UserCollectionsResolverService } from './user-collections-resolver.service';

describe('UserCollectionsResolver', () => {
  let resolver: UserCollectionsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserCollectionsResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
