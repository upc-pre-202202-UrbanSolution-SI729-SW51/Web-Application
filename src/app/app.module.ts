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
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import{NgApexchartsModule} from "ng-apexcharts";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ParkingLotsListComponent } from './parking/pages/parking-lots-list/parking-lots-list.component';
import { ParkingInformationComponent } from './parking/pages/parking-information/parking-information.component';
import { HomeComponent } from './public/pages/home/home.component';
import { DriversComponent } from './users/pages/drivers/drivers.component';
import { OwnersComponent } from './users/pages/owners/owners.component';
import { RegisterComponent } from './users/pages/register/register.component';
import { DriverDetailComponent } from './users/pages/driver-detail/driver-detail.component';
import { ParkingBookComponent } from './parking/pages/parking-book/parking-book.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ParkingLotsListComponent,
    ParkingInformationComponent,
    HomeComponent,
    DriversComponent,
    OwnersComponent,
    RegisterComponent,
    DriverDetailComponent,
    ParkingBookComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
