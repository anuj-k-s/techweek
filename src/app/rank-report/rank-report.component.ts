import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ReportService} from './report.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as XLSX from 'xlsx';
import {Participant} from '../home/Participant';
import {SharedService} from '../SharedService';
//import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'app-rank-report',
    templateUrl: './rank-report.component.html',
    styleUrls: ['./rank-report.component.scss']
})
export class RankReportComponent implements OnInit {

    participants: any[];
    displayedColumns: string[] = ['firstName', 'lastName', 'email', 'location', 'offering', 'scoreOne', 'scoreTwo', 'scoreThree', 'totalScore'];
    filterString : string;

    dataSource: MatTableDataSource<Participant>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('TABLE') table: ElementRef;

    constructor(private reportService: ReportService, private sharedServcie: SharedService) {

    }

    ngOnInit() {
        this.reportService.getAllParticipant().subscribe((data: any[]) => {
            if (data && data.length > 0) {
                this.filterString = null;
                let locationData = [];
                let restOfTheData = [];
                let sortedLocationData = [];
                locationData = data.filter(d => d.location && d.location === this.getLocation(this.sharedServcie.loggedinUser));
                if (locationData.length == 0) {
                    this.participants = data;
                } else {
                    restOfTheData = data.filter(d => d.location && d.location != this.getLocation(this.sharedServcie.loggedinUser));
                    locationData.sort((p1, p2): number => {
                        if (p1.totalScore && p2.totalScore) {
                            if (p2.totalScore > p1.totalScore) {
                                return 1;
                            }
                            if (p2.totalScore < p1.totalScore) {
                                return -1;
                            }
                        }
                        return 0;
                    });
                    this.participants = locationData.concat(restOfTheData);
                }
            }
            this.dataSource = new MatTableDataSource(this.participants);
            this.dataSource.filter = '';
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
        
        setInterval(() => {
            this.getAllParticipant();
        }, 10000 * 60);
    }



    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }


    ExportTOExcel() {
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, 'Tech_week_report.xlsx');

    }

    getLocation(data: any) {
        if (data.userName === 'user_bnglr') {
            return 'Bengaluru';
        }

        if (data.userName === 'user_hyd') {
            return 'Hyderabad';
        }

        if (data.userName === 'user_delhi') {
            return 'Delhi';
        }

        if (data.userName === 'user_mumbai') {
            return 'Mumbai';
        }

    }

    getAllParticipant() {
        this.reportService.getAllParticipant().subscribe((data: any[]) => {
            if (data && data.length > 0) {
                let locationData = [];
                let restOfTheData = [];
                let sortedLocationData = [];
                locationData = data.filter(d => d.location && d.location === this.getLocation(this.sharedServcie.loggedinUser));
                if (locationData.length == 0) {
                    this.participants = data;
                } else {
                    restOfTheData = data.filter(d => d.location && d.location != this.getLocation(this.sharedServcie.loggedinUser));
                    locationData.sort((p1, p2): number => {
                        if (p1.totalScore && p2.totalScore) {
                            if (p2.totalScore > p1.totalScore) {
                                return 1;
                            }
                            if (p2.totalScore < p1.totalScore) {
                                return -1;
                            }
                        }
                        return 0;
                    });
                    this.participants = locationData.concat(restOfTheData);
                }
            }
            this.dataSource = new MatTableDataSource(this.participants);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
}

