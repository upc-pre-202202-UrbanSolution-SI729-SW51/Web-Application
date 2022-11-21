import { Component, OnInit } from '@angular/core';
import {BookingsService} from "../../services/bookings.service";
import {Booking} from "../../model/booking";

@Component({
  selector: 'app-bookings-owner',
  templateUrl: './bookings-owner.component.html',
  styleUrls: ['./bookings-owner.component.css']
})
export class BookingsOwnerComponent implements OnInit {
  bookings: Array<Booking> = [];

  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.bookingService.getAll().subscribe((response: any) => {
      this.bookings=response;
    })
    console.log(this.bookings);
  }

}
