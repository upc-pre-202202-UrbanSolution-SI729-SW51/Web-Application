import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Car} from "../model/car";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsService extends BaseService<Car>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/cars';
  }
}
