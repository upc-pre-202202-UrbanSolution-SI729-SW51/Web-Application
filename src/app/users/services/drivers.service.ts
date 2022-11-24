import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Driver} from "../model/driver";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DriversService extends BaseService<Driver>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://json-server-deploy-12.herokuapp.com/drivers'
  }
}
