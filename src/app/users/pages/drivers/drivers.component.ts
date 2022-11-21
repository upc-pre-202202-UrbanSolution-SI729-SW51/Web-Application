import { Component, OnInit } from '@angular/core';
import {DriversService} from "../../services/drivers.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Array<any> = [];

  constructor(private driversService: DriversService) { }

  ngOnInit(): void {
    this.driversService.getAll().subscribe((response: any) => {
      this.drivers=response;
    })
  }
}
