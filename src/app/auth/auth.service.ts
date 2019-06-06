import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import {SharedService} from '../SharedService'

@Injectable()
export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(
        private router: Router,
        private sharedService: SharedService
    ) { }


    login() {

        this.loggedIn.next(true);
        this.sharedService.loggedinUser.role === 'user'
        this.router.navigate(['/register']);

        /*if(this.sharedService.loggedinUser.role==='user'){
            this.router.navigate(['/']);
        }else if(this.sharedService.loggedinUser.role==='admin'){
             this.router.navigate(['/rank-report']);
        }*/

    }

    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}
