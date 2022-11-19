import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Owner} from "../model/owner";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OwnersService extends BaseService<Owner>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/owners'
  }
}
