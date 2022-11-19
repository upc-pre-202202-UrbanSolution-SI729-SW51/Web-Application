import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingInformationComponent } from './parking-information.component';

describe('ParkingReserveComponent', () => {
  let component: ParkingInformationComponent;
  let fixture: ComponentFixture<ParkingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
