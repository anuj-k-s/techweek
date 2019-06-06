import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Participant} from './Participant';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    registerUrl = 'https://techweek.cfapps.io/register';
    locationUrl = 'https://techweek.cfapps.io/getAllLocation';
    offeringUrl = 'https://techweek.cfapps.io/getAllOffering';
    
     /*registerUrl = 'http://localhost:8080/register';
    locationUrl = 'http://localhost:8080/getAllLocation';
    offeringUrl = 'http://localhost:8080/getAllOffering';*/
    constructor(private httpClient: HttpClient) { }

    register(participant: Participant) {
        return this.httpClient.post(`${this.registerUrl}`, participant);
    }

    getAllLocation() {
        return this.httpClient.get(`${this.locationUrl}`);
    }

    getAllOffering() {
        return this.httpClient.get(`${this.offeringUrl}`);
    }
}





