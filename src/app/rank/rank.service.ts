import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Participant} from '../home/Participant';

@Injectable({
    providedIn: 'root'
})
export class RankService {

    updateParticipantUrl = 'http://localhost:8080/updateParticipant';
    
   // updateParticipantUrl = 'https://techweek.cfapps.io/updateParticipant';
    

    constructor(private httpClient: HttpClient) { }

    updateParticipant(data: Participant[]) {
        return this.httpClient.post(`${this.updateParticipantUrl}`,data);
    }
}
