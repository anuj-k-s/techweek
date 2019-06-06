import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  position: number;
  time: string;
  project: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 2, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 3, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 4, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 5, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 6, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 7, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 8, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 9, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  {position: 10, date: '01/01/2018', time: '06:30' , project: 'HCSC',status : 'submitted'},
  
];

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'date', 'time', 'project','status'];
  dataSource = ELEMENT_DATA;
}
