import { TestBed } from '@angular/core/testing';

import { ParkingPaymentService } from './parking-payment.service';

describe('ParkingPaymentService', () => {
  let service: ParkingPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
