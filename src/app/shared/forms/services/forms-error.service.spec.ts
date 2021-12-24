import { TestBed } from '@angular/core/testing';

import { FormsErrorService } from './forms-error.service';

describe('FormsErrorService', () => {
  let service: FormsErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
