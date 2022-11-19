import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {ActivatedRoute} from "@angular/router";
import {DriversService} from "../../../users/services/drivers.service";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";

@Component({
  selector: 'app-parking-book',
  templateUrl: './parking-book.component.html',
  styleUrls: ['./parking-book.component.css']
})
export class ParkingBookComponent implements OnInit {

  carData: Car;
  driver:any;
  parking:any;
  idDriver!:number;
  idParking!:number;

  constructor(private route:ActivatedRoute, private driversService: DriversService,
              private parkingLotsListService: ParkingLotsListService) {
    this.carData = {} as Car;
  }

  ngOnInit(): void {
    this.idDriver = this.route.snapshot.params['idDriver'];
    this.driversService.getById(this.idDriver).subscribe((response: any) => {
      this.driver=response;
    })
    this.idParking = this.route.snapshot.params['idParking'];
    this.parkingLotsListService.getById(this.idParking).subscribe((response: any) =>{
      this.parking=response;
    })
  }

  createBooking() {
    console.log(this.carData.brand);
    console.log(this.carData.model);
    console.log(this.carData.color);
    console.log(this.carData.plateNumber);
    console.log(this.driver.name);
    console.log(this.driver.idType);
    console.log(this.driver.idNumber);
    console.log(this.parking.name);
    console.log(this.parking.location);
    console.log(this.parking.costHours);
  }
}
