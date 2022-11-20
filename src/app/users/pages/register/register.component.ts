import {Component, OnInit} from '@angular/core';
import {Driver} from "../../model/driver";
import {DriversService} from "../../services/drivers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Owner} from "../../model/owner";
import {OwnersService} from "../../services/owners.service";
import {User} from "../../model/user";
import {ParkingLot} from "../../../parking/model/parking-lot";
import {Car} from "../../../parking/model/car";
import {ParkingLotsListService} from "../../../parking/services/parking-lots-list.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: User;
  driverData: Driver;
  ownerData: Owner;
  parkingData: ParkingLot;
  carData: Car;

  drivers: Array<Driver> = [];
  owners: Array<Owner> = [];
  cars: Array<Car> = [];
  parkingLots: Array<ParkingLot> = [];
  isDriver: boolean | undefined;

  constructor(private driversService: DriversService, private ownersService: OwnersService,
              private parkingLotsListService: ParkingLotsListService,
              private router: Router, private route: ActivatedRoute) {
    this.userData = {} as User;
    this.driverData = {} as Driver;
    this.ownerData = {} as Owner;
    this.parkingData = {} as ParkingLot;
    this.carData = {} as Car;
  }

  ngOnInit(): void {
    this.userData.userType=this.route.snapshot.url[0].path;
    this.isDriver = this.userData.userType == 'drivers';
  }

  addDriver() {
    if (this.userData.userType=='drivers') {
      this.carData.id=1;
      this.cars.push(this.carData);

      this.driverData.name=this.userData.name;
      this.driverData.lastName=this.userData.lastName;
      this.driverData.idType=this.userData.idType;
      this.driverData.idNumber=this.userData.idNumber;
      this.driverData.cars=this.cars;

      this.driversService.create(this.driverData).subscribe(() => {
        this.drivers.push(this.driverData);
      });
    }
    else {
      this.parkingLots.push(this.parkingData);
      this.parkingLotsListService.create(this.parkingData).subscribe(() => {
        this.parkingLots.push(this.parkingData);
      });
      this.parkingLots[0].id=1;
      this.ownerData.name=this.userData.name;
      this.ownerData.lastName=this.userData.lastName;
      this.ownerData.idType=this.userData.idType;
      this.ownerData.idNumber=this.userData.idNumber;
      this.ownerData.parkingLots=this.parkingLots;

      this.ownersService.create(this.ownerData).subscribe(() => {
        this.owners.push(this.ownerData);
      });
    }
    this.router.navigate([this.userData.userType]);
  }
}
