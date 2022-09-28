import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-parking-payment',
  templateUrl: './parking-payment.component.html',
  styleUrls: ['./parking-payment.component.css']
})
export class ParkingPaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToHome() {
    this.router.navigate(['parking-lots']);
  }
}
