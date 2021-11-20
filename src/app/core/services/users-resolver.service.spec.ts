import { TestBed } from '@angular/core/testing';

import { UsersResolverService } from './users-resolver.service';

describe('UsersResolver', () => {
  let resolver: UsersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UsersResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
