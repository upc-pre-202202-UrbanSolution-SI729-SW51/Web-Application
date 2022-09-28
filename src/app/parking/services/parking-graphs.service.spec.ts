import { TestBed } from '@angular/core/testing';

import { ParkingGraphsService } from './parking-graphs.service';

describe('ParkingGraphsService', () => {
  let service: ParkingGraphsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingGraphsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
