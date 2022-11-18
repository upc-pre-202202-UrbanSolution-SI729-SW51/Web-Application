import {Component, OnInit, ViewChild} from '@angular/core';
import {Driver} from "../../model/driver";
import {DriversService} from "../../services/drivers.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  driverData: Driver;
  drivers: Array<any> = [];

  constructor(private driversService: DriversService,
              private router: Router) {
    this.driverData = {} as Driver;
  }

  ngOnInit(): void {
  }

  addDriver() {
      this.driversService.create(this.driverData).subscribe((response: any) => {
        this.drivers.push(this.driverData);
      });
      this.navigateToDriversHome();
  }

  navigateToDriversHome() {
    this.router.navigate(['drivers']);
  }
}
