import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingEditDeleteComponent } from './parking-edit-delete.component';

describe('ParkingEditDeleteComponent', () => {
  let component: ParkingEditDeleteComponent;
  let fixture: ComponentFixture<ParkingEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingEditDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
