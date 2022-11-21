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
import {OwnerDetailComponent} from "./users/pages/owner-detail/owner-detail.component";
import {ParkingCreateComponent} from "./parking/pages/parking-create/parking-create.component";
import {ParkingEditDeleteComponent} from "./parking/pages/parking-edit-delete/parking-edit-delete.component";
import {BookingsDriverComponent} from "./booking/pages/bookings-driver/bookings-driver.component";
import {BookingsOwnerComponent} from "./booking/pages/bookings-owner/bookings-owner.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'drivers/register', component: RegisterComponent},
  { path: 'drivers/:idDriver', component: DriverDetailComponent},
  { path: 'drivers/:idDriver/bookings-driver', component: BookingsDriverComponent},
  { path: 'drivers/:idDriver/:car', component: ParkingLotsListComponent},
  { path: 'drivers/:idDriver/:car/:idParking', component: ParkingInformationComponent},
  { path: 'drivers/:idDriver/:car/:idParking/book', component: ParkingBookComponent},
  { path: 'owners', component: OwnersComponent},
  { path: 'owners/register', component: RegisterComponent},
  { path: 'owners/:idOwner', component: OwnerDetailComponent},
  { path: 'owners/:idOwner/bookings-owner', component: BookingsOwnerComponent},
  { path: 'owners/:idOwner/createParking', component: ParkingCreateComponent},
  { path: 'owners/:idOwner/:idParking', component: ParkingEditDeleteComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
