import { Component, OnInit } from '@angular/core';
import {ParkingLot} from "../../model/parking-lot";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-parking-edit-delete',
  templateUrl: './parking-edit-delete.component.html',
  styleUrls: ['./parking-edit-delete.component.css']
})
export class ParkingEditDeleteComponent implements OnInit {
  id!:number;
  parkingData: ParkingLot;

  parkingLots: Array<any> = [];

  constructor(private parkingLotsListService: ParkingLotsListService,
              private route:ActivatedRoute) {
    this.parkingData = {} as ParkingLot;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idParking'];
    this.parkingLotsListService.getById(this.id).subscribe((response: any) =>{
      this.parkingData=response;
    })
  }

  updateParking() {
    this.parkingLotsListService.update(this.parkingData.id, this.parkingData)
      .subscribe((response: any) => {
        this.parkingLots = this.parkingLots
          .map((o: ParkingLot) => {
            if (o.id === response.id) {
              o = response;
            }
            return o;
          });
      });
  }
}
