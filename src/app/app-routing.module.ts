import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingLotsComponent} from "./parking/pages/parking-lots/parking-lots.component";
import {ParkingGraphsComponent} from "./parking/pages/parking-graphs/parking-graphs.component";
import {ProfilesComponent} from "./parking/pages/profiles/profiles.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {ParkingPaymentComponent} from "./parking/pages/parking-payment/parking-payment.component";

const routes: Routes = [
  { path: 'parking-lots', component: ParkingLotsComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  { path: 'parking-graphs', component: ParkingGraphsComponent},
  { path: 'profile', component: ProfilesComponent},
  { path: 'parking-payment', component: ParkingPaymentComponent},
  { path: '', redirectTo: 'parking-lots', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
