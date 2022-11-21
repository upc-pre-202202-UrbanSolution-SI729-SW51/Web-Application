import { Component, OnInit } from '@angular/core';
import {ParkingLot} from "../../model/parking-lot";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";

@Component({
  selector: 'app-parking-create',
  templateUrl: './parking-create.component.html',
  styleUrls: ['./parking-create.component.css']
})
export class ParkingCreateComponent implements OnInit {
  parkingData: ParkingLot;

  parkingLots: Array<any> = [];

  constructor(private parkingLotsListService: ParkingLotsListService) {
    this.parkingData = {} as ParkingLot;
  }

  ngOnInit(): void {
    this.parkingLotsListService.getAll().subscribe((response: any) =>{
      this.parkingLots=response;
    })
  }

  addNewParking() {
    this.parkingData.id=this.parkingLots.length+1;
    this.parkingLotsListService.create(this.parkingData).subscribe(() => {
      this.parkingLots.push(this.parkingData);
    });
  }
}
