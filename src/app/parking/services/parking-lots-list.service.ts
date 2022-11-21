import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ParkingLot} from "../model/parking-lot";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParkingLotsListService extends BaseService<ParkingLot>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/parking-lots';
  }
}
