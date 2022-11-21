import { Component, OnInit } from '@angular/core';
import {BookingsService} from "../../services/bookings.service";
import {Booking} from "../../model/booking";
import {ActivatedRoute} from "@angular/router";
import {ParkingLot} from "../../../parking/model/parking-lot";

@Component({
  selector: 'app-bookings-owner',
  templateUrl: './bookings-owner.component.html',
  styleUrls: ['./bookings-owner.component.css']
})
export class BookingsOwnerComponent implements OnInit {
  idParking!:number;
  bookings: Array<Booking> = [];
  booking: Booking;
  noBookings: boolean | undefined;

  constructor(private bookingService: BookingsService, private route:ActivatedRoute) {
    this.booking = {} as Booking;
  }

  ngOnInit(): void {
    this.idParking = this.route.snapshot.params['idParking'];
    this.bookingService.getAll().subscribe((response: any) => {
      this.bookings=response.filter((booking: Booking) => booking.parkingLot.id==this.idParking);
      this.noBookings = this.bookings.length == 0;
    })
  }

  completeBooking(id: number) {
    this.bookingService.getById(id).subscribe((response: any) =>{
      this.booking=response;
      this.booking.status="Completed"
      this.bookingService.update(id, this.booking)
        .subscribe((response: any) => {
          this.bookings = this.bookings
            .map((o: Booking) => {
              if (o.id === response.id) {
                o = response;
              }
              return o;
            });
        });
    })
  }
}
