import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingLotsComponent} from "./parking/pages/parking-lots/parking-lots.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'parking-lots', component: ParkingLotsComponent},
  { path: '', redirectTo: 'parking-lots', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
