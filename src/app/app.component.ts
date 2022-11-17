import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-Application';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/drivers', title: 'Drivers'},
    { path: '/owners', title: 'Owners'},
    { path: '/parking-lots-list', title: 'Parking List'}
  ]
}
