import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsOwnerComponent } from './bookings-owner.component';

describe('BookingsOwnerComponent', () => {
  let component: BookingsOwnerComponent;
  let fixture: ComponentFixture<BookingsOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
