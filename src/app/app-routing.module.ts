import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { ParkingLotsListComponent } from "./parking/pages/parking-lots-list/parking-lots-list.component";
import { ParkingInformationComponent } from "./parking/pages/parking-information/parking-information.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {DriversComponent} from "./users/pages/drivers/drivers.component";
import {OwnersComponent} from "./users/pages/owners/owners.component";
import {RegisterComponent} from "./users/pages/register/register.component";
import {DriverDetailComponent} from "./users/pages/driver-detail/driver-detail.component";
import {ParkingBookComponent} from "./parking/pages/parking-book/parking-book.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'drivers/register', component: RegisterComponent},
  { path: 'drivers/:idDriver', component: DriverDetailComponent},
  { path: 'drivers/:idDriver/:car', component: ParkingLotsListComponent},
  { path: 'drivers/:idDriver/:car/:idParking', component: ParkingInformationComponent},
  { path: 'drivers/:idDriver/:car/:idParking/book', component: ParkingBookComponent},
  { path: 'owners', component: OwnersComponent},
  { path: 'owners/register', component: RegisterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
