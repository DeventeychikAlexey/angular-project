import { TestBed } from '@angular/core/testing';

import { ListSectionService } from './list-section.service';

describe('ListService', () => {
  let service: ListSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
