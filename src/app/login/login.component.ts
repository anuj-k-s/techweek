import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../auth/auth.service';
import {User} from './../auth/user';
import {SharedService} from '../SharedService';
import {MatSnackBar} from '@angular/material';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    private formSubmitAttempt: boolean;
    user: any = new Object();

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private sharedService: SharedService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    isFieldInvalid(field: string) {
        return (
            (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt)
        );
    }

    onSubmit() {
        // this.sharedService.loggedinUser = this.user;
        //this.authService.login();
        if (this.user.userName && this.user.password) {

            if ((this.user.password === 'Techbnglr@19' && this.user.userName === 'user_bnglr') ||
                (this.user.password === 'Techhyd@19' && this.user.userName === 'user_hyd') ||
                (this.user.password === 'Techmum@19' && this.user.userName === 'user_mumbai') ||
                (this.user.password === 'Techdelhi@19' && this.user.userName === 'user_delhi')) {
                this.sharedService.loggedinUser = this.user;
                this.authService.login();
            } else {
                this.snackBar.open('Invalid Credentials', 'Undo', {
                    duration: 6000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'

                });
            }
        }
    }

    keyDownFunction($event) {
        if (event['keyCode'] == 13) {
            this.onSubmit();
        }
    }
}
