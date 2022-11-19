import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DriversService} from "../../services/drivers.service";
import {ParkingLotsListService} from "../../../parking/services/parking-lots-list.service";

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {
  id!:number;
  driver:any;
  parkingLotsCount=0;

  constructor(private route:ActivatedRoute, private driversService: DriversService,
              private parkingLotsService: ParkingLotsListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idDriver'];
    this.driversService.getById(this.id).subscribe((response: any) => {
      this.driver=response;
    })
    this.getCount();
  }

  getCount() {
    this.parkingLotsService.getAll().subscribe((response:any) => {
      this.parkingLotsCount=response.length;
    })
  }
}
