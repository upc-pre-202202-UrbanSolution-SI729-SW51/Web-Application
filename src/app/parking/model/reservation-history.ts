import {Reservation} from "./reservation";

export interface ReservationHistory {
    id: number;
    Reservation_id: Reservation;
    Name:string;
    NameOfParking:string;
    Location:string;
    HoursOfState:number;
    CostHours:number;
    Total:number;
}
