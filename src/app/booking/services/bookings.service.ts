import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Booking} from "../model/booking";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookingsService extends BaseService<Booking>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://json-server-deploy-12.herokuapp.com/bookings';
  }
}
