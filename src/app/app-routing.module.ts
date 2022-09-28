import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingLotsComponent} from "./parking/pages/parking-lots/parking-lots.component";

const routes: Routes = [
  { path: 'parking-lots', component: ParkingLotsComponent},
  { path: '', redirectTo: 'parking-lots', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
