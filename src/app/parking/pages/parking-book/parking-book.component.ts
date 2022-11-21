import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DriversService} from "../../../users/services/drivers.service";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";
import {Car} from "../../model/car";
import {ParkingLot} from "../../model/parking-lot";
import {BookingsService} from "../../../booking/services/bookings.service";
import {Booking} from "../../../booking/model/booking";
import {Owner} from "../../../users/model/owner";

@Component({
  selector: 'app-parking-book',
  templateUrl: './parking-book.component.html',
  styleUrls: ['./parking-book.component.css']
})
export class ParkingBookComponent implements OnInit {
  driver:any;
  parkingLot:any;
  carData: Car;
  bookingData: Booking;
  idDriver!:number;
  idParking!:number;

  cars: Array<any> = [];
  drivers: Array<any> = [];
  bookings: Array<Booking> = [];

  constructor(private route:ActivatedRoute, private router: Router,
              private driversService: DriversService, private parkingLotsListService: ParkingLotsListService,
              private bookingsService: BookingsService) {
    this.carData = {} as Car;
    this.bookingData = {} as Booking;
  }

  ngOnInit(): void {
    this.idDriver = this.route.snapshot.params['idDriver'];
    this.driversService.getById(this.idDriver).subscribe((response: any) => {
      this.driver=response;
      this.cars=response.cars;
    })

    this.idParking = this.route.snapshot.params['idParking'];
    this.parkingLotsListService.getById(this.idParking).subscribe((response: any) =>{
      this.parkingLot=response;
    })
  }

  createBooking(id: number) {
    this.bookingData.idDriver=this.driver.id;
    this.bookingData.carId=id;
    this.bookingData.idParkingLot=this.parkingLot.id;
    this.bookingData.status="Booked";

    this.bookingsService.create(this.bookingData).subscribe(() => {
      this.bookings.push(this.bookingData);
    });
    this.router.navigate(['/drivers',this.driver.id,'bookings-driver']);
  }

  addNewCar() {
    this.carData.id=this.cars.length+1;
    this.driver.cars.push(this.carData);
    this.updateCarsFromDriver();
  }

  updateCarsFromDriver() {
    this.driversService.update(this.idDriver, this.driver)
      .subscribe((response: any) => {
        this.drivers = this.drivers
          .map((o: ParkingLot) => {
            if (o.id === response.id) {
              o = response;
            }
            return o;
          });
      });
  }
}
