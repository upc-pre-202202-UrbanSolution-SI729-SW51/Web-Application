import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {ActivatedRoute, Router} from "@angular/router";
import {ParkingLot} from "../../model/parking-lot";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ParkingLotsService} from "../../services/parking-lots/parking-lots.service";

@Component({
  selector: 'app-parking-lots',
  templateUrl: './parking-lots.component.html',
  styleUrls: ['./parking-lots.component.css']
})
export class ParkingLotsComponent implements OnInit,AfterViewInit {

  invalidUrl: string = '';

  parkingLotData: ParkingLot;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'location', 'hoursOfAttention', 'costHours','reservation'];

  @ViewChild('parkingLotForm', {static: false})
  parkingLotForm!: NgForm;

  @ViewChild(MatPaginator, {static: false})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private parkingLotService: ParkingLotsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.parkingLotData = {} as ParkingLot;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllParkingLot();
    this.invalidUrl = this.route.snapshot.url[0].path;

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  navigateToReservation() {
    this.router.navigate(['reservation']);
  }

  getAllParkingLot() {
    this.parkingLotService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: ParkingLot) {
    this.parkingLotData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.parkingLotForm.resetForm();
  }

  deleteItem(id: number) {
    this.parkingLotService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data
        .filter((o: ParkingLot) => { return o.id !== id ? o : false; });
    });
    console.log(this.dataSource.data);
  }

  addParkingLot() {
    this.parkingLotData.id = 0;
    this.parkingLotService.create(this.parkingLotData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o});
    });
  }

  updateParkingLot() {
    this.parkingLotService.update(this.parkingLotData.id, this.parkingLotData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data
          .map((o: ParkingLot) => {
            if (o.id === response.id) {
              o = response;
            }
            return o;
          });
      });
  }

  onSubmit() {
    if (this.parkingLotForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log(' about to update');
        this.updateParkingLot();
      } else {
        console.log('about to add');
        this.addParkingLot();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }

}
