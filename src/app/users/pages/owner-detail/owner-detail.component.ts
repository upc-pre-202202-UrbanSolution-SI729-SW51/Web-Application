import { Component, OnInit } from '@angular/core';
import {Owner} from "../../model/owner";
import {ActivatedRoute} from "@angular/router";
import {OwnersService} from "../../services/owners.service";

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  id!:number;
  owner:Owner;
  parkingLots: Array<any> = [];

  constructor(private route:ActivatedRoute, private ownersService: OwnersService) {
    this.owner = {} as Owner;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idOwner'];
    this.ownersService.getById(this.id).subscribe((response:any) => {
      this.owner=response;
      this.parkingLots=response.parkingLots;
    })
  }

}
