import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parking-lots-list',
  templateUrl: './parking-lots-list.component.html',
  styleUrls: ['./parking-lots-list.component.css']
})
export class ParkingLotsListComponent implements OnInit {
  @Input() parkingLots: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
