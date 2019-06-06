import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Participant} from '../home/Participant';

@Injectable({
    providedIn: 'root'
})
export class ReportService {


    rankReportUrl = 'http://localhost:8080/getAllParticipant';
    
    
    //rankReportUrl = 'https://techweek.cfapps.io/getAllParticipant';
    
    constructor(private httpClient: HttpClient) { }

    getAllParticipant() {
        return this.httpClient.get(`${this.rankReportUrl}`);
    }


}
