import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingReserveComponent } from './parking-reserve.component';

describe('ParkingReserveComponent', () => {
  let component: ParkingReserveComponent;
  let fixture: ComponentFixture<ParkingReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
