import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-parking-lots',
  templateUrl: './parking-lots.component.html',
  styleUrls: ['./parking-lots.component.css']
})
export class ParkingLotsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToHome() {
    this.router.navigate(['parking-payment']);
  }
}
