import { Component, OnInit } from '@angular/core';
import {ParkingLot} from "../../model/parking-lot";
import {ParkingLotsListService} from "../../services/parking-lots-list.service";
import {ActivatedRoute} from "@angular/router";
import {Owner} from "../../../users/model/owner";
import {OwnersService} from "../../../users/services/owners.service";

@Component({
  selector: 'app-parking-create',
  templateUrl: './parking-create.component.html',
  styleUrls: ['./parking-create.component.css']
})
export class ParkingCreateComponent implements OnInit {
  id!:number;
  parkingData: ParkingLot;
  owner:Owner;
  accept4x4truck!: string;

  parkingLots: Array<any> = [];
  drivers: Array<any> = [];

  constructor(private route:ActivatedRoute, private parkingLotsListService: ParkingLotsListService,
              private ownersService: OwnersService) {
    this.parkingData = {} as ParkingLot;
    this.owner = {} as Owner;
  }

  ngOnInit(): void {
    this.parkingLotsListService.getAll().subscribe((response: any) =>{
      this.parkingLots=response;
    })
    this.id = this.route.snapshot.params['idOwner'];
    this.ownersService.getById(this.id).subscribe((response: any) =>{
      this.owner=response;
    })
  }

  updateOwner() {
    this.id = this.route.snapshot.params['idOwner'];
    this.ownersService.update(this.owner.id, this.owner)
      .subscribe((response: any) => {
        this.drivers = this.drivers
          .map((o: ParkingLot) => {
            if (o.id === response.id) {
              o = response;
            }
            return o;
          });
      });
  }

  addNewParking() {
    this.parkingData.id=this.parkingLots.length+1;
    this.parkingData.accept4x4Truck=this.accept4x4truck=="yes";
    this.parkingLotsListService.create(this.parkingData).subscribe(() => {
      this.parkingLots.push(this.parkingData);
    });
    this.owner.parkingLots.push(this.parkingData);
    this.updateOwner();
  }
}
