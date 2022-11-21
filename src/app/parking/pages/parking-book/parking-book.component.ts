import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DriversService} from "../../../users/services/drivers.service";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";
import {Car} from "../../model/car";
import {ParkingLot} from "../../model/parking-lot";
import {BookingsService} from "../../../booking/services/bookings.service";
import {Booking} from "../../../booking/model/booking";
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-parking-book',
  templateUrl: './parking-book.component.html',
  styleUrls: ['./parking-book.component.css']
})
export class ParkingBookComponent implements OnInit {
  id!:number;
  driver:any;
  parkingLot:any;
  car: any;
  carData: Car;
  idDriver!:number;
  idParking!:number;

  cars: Array<any> = [];
  carsFromUser: Array<any> = [];
  drivers: Array<any> = [];
  bookings: Array<Booking> = [];

  constructor(private route:ActivatedRoute, private router: Router,
              private driversService: DriversService, private parkingLotsListService: ParkingLotsListService,
              private bookingsService: BookingsService, private carsService: CarsService) {
    this.carData = {} as Car;
    this.car = {} as Car;
  }

  ngOnInit(): void {
    this.idDriver = this.route.snapshot.params['idDriver'];
    this.driversService.getById(this.idDriver).subscribe((response: any) => {
      this.driver=response;
      this.carsFromUser=response.cars;
    })
    this.carsService.getAll().subscribe((response: any) =>{
      this.cars=response;
    })
    this.idParking = this.route.snapshot.params['idParking'];
    this.parkingLotsListService.getById(this.idParking).subscribe((response: any) =>{
      this.parkingLot=response;
    })
  }

  addNewCar() {
    this.carData.id=this.cars.length+1;
    this.carsService.create(this.carData).subscribe(() => {
      this.cars.push(this.carData);
    })
    this.driver.cars.push(this.carData);
    this.updateDriver();
  }

  updateDriver() {
    this.id = this.route.snapshot.params['idDriver'];
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
