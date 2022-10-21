import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {ReservationHistory} from "../../model/reservation-history";

@Injectable({
  providedIn: 'root'
})
export class ReservationHistoryService {

  // Students Endpoint
  basePath = ' http://localhost:3000/api/v1/ParkingHistory';

  // Common options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  // Create Student
  create(item: any): Observable<ReservationHistory> {
    return this.http.post<ReservationHistory>(
      this.basePath,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get Student by id
  getById(id: any): Observable<ReservationHistory> {
    return this.http.get<ReservationHistory>(
      `${this.basePath}/${id}`,
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Students
  getAll(): Observable<ReservationHistory> {
    return this.http.get<ReservationHistory>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
