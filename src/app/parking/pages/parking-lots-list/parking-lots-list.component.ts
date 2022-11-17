import {Component, OnInit} from '@angular/core';
import {ParkingLotsListService} from "../../services/parking-lots-list.service";

@Component({
  selector: 'app-parking-lots-list',
  templateUrl: './parking-lots-list.component.html',
  styleUrls: ['./parking-lots-list.component.css']
})
export class ParkingLotsListComponent implements OnInit {
  parkingLots: Array<any> = [];

  constructor(private parkingLotListService: ParkingLotsListService) { }

  ngOnInit(): void {
    this.parkingLotListService.getAll().subscribe((response: any) => {
      this.parkingLots=response;
    })
  }

}
