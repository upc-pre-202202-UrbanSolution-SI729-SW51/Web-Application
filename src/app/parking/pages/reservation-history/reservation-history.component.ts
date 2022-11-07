import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ReservationHistory} from "../../model/reservation-history";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ReservationHistoryService} from "../../services/reservation-history/reservation-history.service";

@Component({
  selector: 'app-reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrls: ['./reservation-history.component.css']
})
export class ReservationHistoryComponent implements OnInit,AfterViewInit {


  reservationHistoryData: ReservationHistory;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'Reservation_id', 'Name', 'NameOfParking', 'Location',
    'HoursOfState','CostHours','Total'];

  @ViewChild('reservationHistoryForm', {static: false})
  reservationHistoryForm!: NgForm;

  @ViewChild(MatPaginator, {static: false})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private reservationHistoryService:ReservationHistoryService) {
    this.reservationHistoryData = {} as ReservationHistory;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllReservationHistory();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

  }

  getAllReservationHistory() {
    this.reservationHistoryService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

}
