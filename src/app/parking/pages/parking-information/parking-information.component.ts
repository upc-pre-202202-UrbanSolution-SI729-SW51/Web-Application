import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";
import {ParkingLot} from "../../model/parking-lot";

@Component({
  selector: 'app-parking-information',
  templateUrl: './parking-information.component.html',
  styleUrls: ['./parking-information.component.css']
})
export class ParkingInformationComponent implements OnInit {
  id!:number;
  parkingLot:ParkingLot;

  constructor(private route:ActivatedRoute, private parkingLotListService: ParkingLotsListService) {
    this.parkingLot = {} as ParkingLot;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idParking'];

    this.parkingLotListService.getById(this.id).subscribe((response: any) => {
      this.parkingLot=response;
    })
  }

}
