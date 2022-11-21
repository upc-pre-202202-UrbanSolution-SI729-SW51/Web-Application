import { Component, OnInit } from '@angular/core';
import {BookingsService} from "../../services/bookings.service";
import {Booking} from "../../model/booking";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bookings-driver',
  templateUrl: './bookings-driver.component.html',
  styleUrls: ['./bookings-driver.component.css']
})
export class BookingsDriverComponent implements OnInit {
  driver:any;
  parkingLot:any;

  idDriver!:number;
  bookings: Array<Booking> = [];
  noBookings: boolean | undefined;

  constructor(private bookingService: BookingsService, private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.idDriver = this.route.snapshot.params['idDriver'];
    this.bookingService.getAll().subscribe((response: any) => {
      this.bookings=response;
      //this.bookings=response.filter((booking: Booking) => booking.driver.id==this.idDriver);
      this.noBookings = this.bookings.length == 0;
    })
  }

  deleteBooking(id: number) {
    this.bookingService.delete(id).subscribe(() => {
      this.bookings = this.bookings
        .filter((o: Booking) => { return o.id !== id ? o : false; });
    });
  }
}
