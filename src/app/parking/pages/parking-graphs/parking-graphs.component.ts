import { Component, OnInit } from '@angular/core';
import {ApexChart, ApexNonAxisChartSeries, ApexTitleSubtitle} from "ng-apexcharts";

@Component({
  selector: 'app-parking-graphs',
  templateUrl: './parking-graphs.component.html',
  styleUrls: ['./parking-graphs.component.css']
})
export class ParkingGraphsComponent implements OnInit {


  series: ApexNonAxisChartSeries=[5,4,5,6];


  labels=["santa anita","jockey","Mall de sur","real plaza"];

  charDetails:ApexChart={
    type:'pie'

  }
  chartTitle: ApexTitleSubtitle={
    text:'Leading companies',
    align:'center'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
