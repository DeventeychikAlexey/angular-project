import { TestBed } from '@angular/core/testing';

import { ImageRequestService } from './image-request.service';

describe('ImagesService', () => {
  let service: ImageRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
