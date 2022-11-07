import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { ParkingLotsComponent } from './parking/pages/parking-lots/parking-lots.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import{NgApexchartsModule} from "ng-apexcharts";
import { ReservationComponent } from './parking/pages/reservation/reservation.component';
import { ReservationHistoryComponent } from './parking/pages/reservation-history/reservation-history.component';
import {ParkingLotsService} from "./parking/services/parking-lots/parking-lots.service";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    ParkingLotsComponent,
    PageNotFoundComponent,
    ReservationComponent,
    ReservationHistoryComponent
  ],
    imports: [
        NgApexchartsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatSortModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatStepperModule,
        MatSelectModule,
        MatSidenavModule
    ],
  providers: [ParkingLotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
