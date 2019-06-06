import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BookingDetail} from './BookingDetail';
import {Participant} from './Participant';
import {BookingService} from './booking.service';
import {RegisterService} from './register.service';
import {SharedService} from '../SharedService';
import {MatSnackBar} from '@angular/material';


import {SnackbarComponent} from '../snackbar/snackbar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    participant = new Participant();
    locations: any[];
    offerings: any[];

    invalidFirstNameMsg: string;
    invalidLastNameMsg: string;
    invalidEmailMsg: string;
    invalidLocationMsg: string;
    invalidOfferingMsg: string;

    constructor(private registerService: RegisterService,
        private sharedService: SharedService, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.registerService.getAllLocation().subscribe((data: any[]) => {
            this.locations = data;
        });

        this.registerService.getAllOffering().subscribe((data: any[]) => {
            this.offerings = data;
        })

    }



    register() {


        /**
         * validate the form
         */
        if (!this.participant.firstName) {
            this.invalidFirstNameMsg = "Please enter first name";
        }
        if (!this.participant.lastName) {
            this.invalidLastNameMsg = "Please enter last name";
        }
        if (!this.participant.email || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.participant.email))) {
            this.invalidEmailMsg = "Please enter valid email id";
        }
        if (!this.participant.location) {
            this.invalidLocationMsg = "Please enter location";
        }
        if (!this.participant.offering) {
            this.invalidOfferingMsg = "Please enter offering";
        }

        if (!this.invalidFirstNameMsg && !this.invalidLastNameMsg && !this.invalidEmailMsg && !this.invalidLocationMsg
            && !this.invalidOfferingMsg) {
            this.registerService.register(this.participant).subscribe((response) => {
                if (response['success']) {
                    this.participant = new Participant();
                    this.snackBar.open('Registered Successfully', 'Undo', {
                        duration: 6000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'

                    });
                } else {
                    if (response['failure'] === 'email already registered') {
                        this.invalidEmailMsg = 'email already registered';
                    }
                    this.snackBar.open(response['failure'], 'Undo', {
                        duration: 6000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'

                    });
                }
            })
        }

    }

    resetForm() {
        this.participant = new Participant();
        this.invalidFirstNameMsg= null;
        this.invalidLastNameMsg= null;
        this.invalidEmailMsg= null;
        this.invalidLocationMsg= null;
        this.invalidOfferingMsg= null;

    }

    onNameChange() {
        this.invalidFirstNameMsg = null;
    }
}
