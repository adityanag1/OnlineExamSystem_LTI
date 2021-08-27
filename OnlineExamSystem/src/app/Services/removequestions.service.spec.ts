import { TestBed } from '@angular/core/testing';

import { RemovequestionsService } from './removequestions.service';

describe('RemovequestionsService', () => {
  let service: RemovequestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemovequestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
