import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { ParkingLotsListComponent } from "./parking/pages/parking-lots-list/parking-lots-list.component";
import { ParkingReserveComponent } from "./parking/pages/parking-reserve/parking-reserve.component";


const routes: Routes = [
  { path: 'parking-lots-list/:id', component: ParkingReserveComponent},
  { path: 'parking-lots-list', component: ParkingLotsListComponent},
  { path: '', redirectTo: 'parking-lots-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
