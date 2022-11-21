import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotsListComponent } from './parking-lots-list.component';

describe('ParkingLotsListComponent', () => {
  let component: ParkingLotsListComponent;
  let fixture: ComponentFixture<ParkingLotsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingLotsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingLotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
