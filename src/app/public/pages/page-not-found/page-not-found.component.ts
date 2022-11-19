import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  invalidUrl: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url[0].path;
  }
}
