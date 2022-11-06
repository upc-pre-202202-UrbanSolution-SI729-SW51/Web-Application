import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DriversService} from "./parking/services/drivers.service";
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
import {MatTreeModule} from '@angular/material/tree';
import {MatTabsModule} from '@angular/material/tabs';
import { DriversComponent } from './parking/pages/drivers/drivers.component';
import { ParkingLotsComponent } from './parking/pages/parking-lots/parking-lots.component';
import { ParkingGraphsComponent } from './parking/pages/parking-graphs/parking-graphs.component';
import { ProfilesComponent } from './parking/pages/profiles/profiles.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ParkingPaymentComponent } from './parking/pages/parking-payment/parking-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    ParkingLotsComponent,
    ParkingGraphsComponent,
    ProfilesComponent,
    PageNotFoundComponent,
    ParkingPaymentComponent
  ],
  imports: [
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
    MatDividerModule
  ],
  providers: [DriversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
