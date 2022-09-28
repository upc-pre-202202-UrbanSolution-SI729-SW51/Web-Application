import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingPaymentComponent } from './parking-payment.component';

describe('ParkingPaymentComponent', () => {
  let component: ParkingPaymentComponent;
  let fixture: ComponentFixture<ParkingPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
