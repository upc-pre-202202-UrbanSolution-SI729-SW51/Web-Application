import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DriversService} from "../../../users/services/drivers.service";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";
import {Car} from "../../model/car";

@Component({
  selector: 'app-parking-book',
  templateUrl: './parking-book.component.html',
  styleUrls: ['./parking-book.component.css']
})
export class ParkingBookComponent implements OnInit {
  driver:any;
  parkingLot:any;
  carData: Car;
  idDriver!:number;
  idParking!:number;

  cars: Array<any> = [];

  constructor(private route:ActivatedRoute, private driversService: DriversService,
              private parkingLotsListService: ParkingLotsListService, private router: Router) {
    this.carData = {} as Car;
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
    console.log(this.driver.name);
    console.log(this.driver.lastName);
    console.log(this.parkingLot.name);
    console.log(this.parkingLot.location);
    console.log(this.cars[id-1].brand);
    console.log(this.cars[id-1].color);
    this.router.navigate(['/drivers',this.driver.id]);
  }

  addNewCar() {
    this.carData.id=this.cars.length+1;
    this.cars.push(this.carData);

    console.log(this.cars);
  }
}
