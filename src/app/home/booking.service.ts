import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BookingDetail} from './BookingDetail';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingUrl = 'http://pivot-transport.us-e2.cloudhub.io/submitDetails';
  constructor(  private httpClient: HttpClient) { }

  submitBooking(empData : BookingDetail){
    return  this.httpClient.post(`${this.bookingUrl}`,empData);
  }
}
