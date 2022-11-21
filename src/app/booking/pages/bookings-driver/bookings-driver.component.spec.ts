import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsDriverComponent } from './bookings-driver.component';

describe('BookingsComponent', () => {
  let component: BookingsDriverComponent;
  let fixture: ComponentFixture<BookingsDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
