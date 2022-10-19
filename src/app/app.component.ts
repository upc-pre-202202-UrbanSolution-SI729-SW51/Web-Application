import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-Application';
  options = [
    { path: '/parking-lots', title: ''},
    { path: '/reservation', title: 'Reservation History'},
    { path: '/profile', title: 'Profile'}
  ]
}
