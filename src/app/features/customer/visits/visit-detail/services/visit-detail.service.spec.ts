import { TestBed } from '@angular/core/testing';

import { VisitDetailService } from './visit-detail.service';

describe('VisitDetailService', () => {
  let service: VisitDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
