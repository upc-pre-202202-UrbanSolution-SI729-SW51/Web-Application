import { Component, OnInit } from '@angular/core';
import {DriversService} from "../../services/drivers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Array<any> = [];

  constructor(private driversService: DriversService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.driversService.getAll().subscribe((response: any) => {
      this.drivers=response;
    })
  }

  navigateToRegister() {
    this.router.navigate(['drivers/register']);
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
