import { TestBed } from '@angular/core/testing';

import { MainDepositService } from './main-deposit.service';

describe('MainDepositService', () => {
  let service: MainDepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainDepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
