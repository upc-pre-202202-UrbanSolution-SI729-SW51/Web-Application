import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

interface Card {
  value: string;
  type: string;
}


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  card: Card[] = [
    {value: 'steak-0', type: 'Steak'},
    {value: 'pizza-1', type: 'Pizza'},
    {value: 'pizza-1', type: 'Tacos'},
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
