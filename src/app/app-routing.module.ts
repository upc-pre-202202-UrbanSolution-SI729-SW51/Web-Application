import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { ParkingLotsListComponent } from "./parking/pages/parking-lots-list/parking-lots-list.component";
import { ParkingReserveComponent } from "./parking/pages/parking-reserve/parking-reserve.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {DriversComponent} from "./users/pages/drivers/drivers.component";
import {OwnersComponent} from "./users/pages/owners/owners.component";
import {RegisterComponent} from "./users/pages/register/register.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'drivers/:id', component: DriversComponent},
  { path: 'owners', component: OwnersComponent},
  { path: 'drivers/register', component: RegisterComponent},
  { path: 'parking-lots-list/:id', component: ParkingReserveComponent},
  { path: 'parking-lots-list', component: ParkingLotsListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
