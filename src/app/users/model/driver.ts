import {Car} from "../../parking/model/car";

export interface Driver {
  id: number;
  name: string;
  lastName: string;
  idType: string;
  idNumber: string;
  cars: Array<Car>;
}
