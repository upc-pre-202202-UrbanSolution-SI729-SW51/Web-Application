import {ParkingLot} from "../../parking/model/parking-lot";

export interface Owner {
  id: number;
  name: string;
  lastName: string;
  idType: string;
  idNumber: string;
  parkingLots: Array<ParkingLot>;
}
