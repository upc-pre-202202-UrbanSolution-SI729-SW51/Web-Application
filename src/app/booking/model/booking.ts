import {Driver} from "../../users/model/driver";
import {ParkingLot} from "../../parking/model/parking-lot";
import {Car} from "../../parking/model/car";

export interface Booking {
  id: number;
  driver: Driver;
  car: Car;
  parkingLot: ParkingLot;
  status: string;
}
