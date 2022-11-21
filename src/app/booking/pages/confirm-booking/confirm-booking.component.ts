import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DriversService} from "../../../users/services/drivers.service";
import {ParkingLotsListService} from "../../../parking/services/parking-lots-list.service";
import {BookingsService} from "../../services/bookings.service";
import {CarsService} from "../../../parking/services/cars.service";
import {Booking} from "../../model/booking";

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {
  idDriver!:number;
  idParking!:number;
  idCar!:number;
  driver:any;
  parkingLot:any;
  car: any;

  bookings: Array<Booking> = [];
  bookingData: Booking;

  constructor(private route:ActivatedRoute, private router: Router,
              private driversService: DriversService, private parkingLotsListService: ParkingLotsListService,
              private carsService: CarsService, private bookingsService: BookingsService) {
    this.bookingData = {} as Booking;
  }

  ngOnInit(): void {
    this.idDriver = this.route.snapshot.params['idDriver'];
    this.driversService.getById(this.idDriver).subscribe((response: any) => {
      this.driver=response;
    })
    this.idCar = this.route.snapshot.params['idCar'];
    this.carsService.getById(this.idCar).subscribe((response: any) =>{
      this.car=response;
    })
    this.idParking = this.route.snapshot.params['idParking'];
    this.parkingLotsListService.getById(this.idParking).subscribe((response: any) =>{
      this.parkingLot=response;
    })
  }

  confirmBooking() {
    this.bookingData.driver=this.driver;
    this.bookingData.car=this.car;
    this.bookingData.parkingLot=this.parkingLot;
    this.bookingData.status="Booked";

    this.bookingsService.create(this.bookingData).subscribe(() => {
      this.bookings.push(this.bookingData);
    });
    this.router.navigate(['/drivers',this.driver.id,'bookings-driver']);
  }
}
