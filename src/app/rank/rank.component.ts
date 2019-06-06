import { Component, OnInit, ViewChild } from '@angular/core';
import {RankService} from './rank.service';
import {ReportService} from '../rank-report/report.service';
import {Participant} from '../home/Participant';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {SharedService} from '../SharedService';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-rank',
    templateUrl: './rank.component.html',
    styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {
    search: string ='';
    events: any[];
    participants: Participant[] = [];
    participantUpdated: Participant[] = [];
    dataSource: MatTableDataSource<Participant>;
    displayedColumns: string[] = ['firstName', 'lastName', 'email', 'location', 'scoreOne', 'scoreTwo', 'scoreThree', 'totalScore'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;    
    searchForm : FormGroup;
    constructor(private reportService: ReportService, 
        private rankService: RankService, private snackBar: MatSnackBar, 
        private sharedServcie: SharedService,
        private fb : FormBuilder) {
    }
    ngOnInit() {

        this.searchForm = this.fb.group({
            search: ''
          });
        
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
        })

    }

    ngAfterViewInit() {
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    validateNumber(e:any,score){
        let input  = String.fromCharCode(e.charCode);
       if(score){
           let num = score.toString();
           input = num.concat(input);
       }
        const regex = /^(([0-5]?[0-9]?)|60)$/;
        if(!regex.test(input)){
            e.preventDefault();
        }
    }
    onChangeScore(data: any) {
        let scoreOne = data.scoreOne ? data.scoreOne : 0;
        let scoreTwo = data.scoreTwo ? data.scoreTwo : 0;
        let scoreThree = data.scoreThree ? data.scoreThree : 0;
        data.totalScore = +scoreOne + +scoreTwo + +scoreThree

        let participant = this.participantUpdated.filter(p => p.email === data.email);
        if (participant && participant.length == 1) {
            this.participantUpdated.splice(this.participantUpdated.indexOf(participant[0]), 1);
        }

        this.participantUpdated.push(data);
    }

    submit() {
        debugger;
        if (this.participantUpdated.length == 0) {
            this.snackBar.open('Nothing to update', 'Undo', {
                duration: 6000,
                verticalPosition: 'top',
                horizontalPosition: 'right'

            });
        } else {
            this.rankService.updateParticipant(this.participantUpdated).subscribe((data) => {
                if (data) {
                    this.reportService.getAllParticipant().subscribe((list: any[]) => {
                        this.participants = list;
                        this.dataSource = new MatTableDataSource(this.participants);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.participantUpdated = [];
                        this.snackBar.open('Score updated successfully', 'Undo', {
                            duration: 6000,
                            verticalPosition: 'top',
                            horizontalPosition: 'right'

                        });
                    })                                     
                   this.searchForm.reset();

                } else {
                    this.snackBar.open('Error occurred', 'Undo', {
                        duration: 6000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'

                    });
                }
            });
        }

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

    prevent(event: any) {
        event.preventDefault();
    }



}
