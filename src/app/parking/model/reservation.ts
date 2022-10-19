import {ParkingLot} from "./parking-lot";
import {Driver} from "./driver";

export interface Reservation {
    id: number;
    ParkingLot: ParkingLot;
    Driver: Driver;
}
