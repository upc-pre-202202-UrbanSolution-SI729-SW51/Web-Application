import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";

@Component({
  selector: 'app-parking-information',
  templateUrl: './parking-information.component.html',
  styleUrls: ['./parking-information.component.css']
})
export class ParkingInformationComponent implements OnInit {
  id!:number;
  parkingLot:any;

  constructor(private route:ActivatedRoute, private parkingLotListService: ParkingLotsListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idParking'];

    this.parkingLotListService.getById(this.id).subscribe((response: any) => {
      this.parkingLot=response;
    })
  }

}
