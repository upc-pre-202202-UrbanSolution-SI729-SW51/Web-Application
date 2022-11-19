import { Component, OnInit } from '@angular/core';
import {OwnersService} from "../../services/owners.service";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owners: Array<any> = [];

  constructor(private ownersService: OwnersService) { }

  ngOnInit(): void {
    this.ownersService.getAll().subscribe((response: any) => {
      this.owners=response;
    })
  }

}
