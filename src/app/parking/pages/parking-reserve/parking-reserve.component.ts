import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ParkingLotsListService} from "../../services/parking-lots-list/parking-lots-list.service";

@Component({
  selector: 'app-parking-reserve',
  templateUrl: './parking-reserve.component.html',
  styleUrls: ['./parking-reserve.component.css']
})
export class ParkingReserveComponent implements OnInit {
  id!:number;
  parkingLot:any;

  constructor(private route:ActivatedRoute, private parkingLotListService: ParkingLotsListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.parkingLotListService.getById(this.id).subscribe((response: any) => {
      this.parkingLot=response;
    })
  }

}
