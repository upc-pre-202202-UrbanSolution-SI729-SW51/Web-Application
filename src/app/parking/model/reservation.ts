import {ParkingLot} from "./parking-lot";

export interface Reservation {
    id: number;
    ParkingLot: ParkingLot;
    total: number;
    parkingHours: number;
}
