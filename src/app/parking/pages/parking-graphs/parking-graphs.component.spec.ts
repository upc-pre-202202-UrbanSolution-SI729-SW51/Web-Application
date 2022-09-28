import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingGraphsComponent } from './parking-graphs.component';

describe('ParkingGraphsComponent', () => {
  let component: ParkingGraphsComponent;
  let fixture: ComponentFixture<ParkingGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
