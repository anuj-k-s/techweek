import { Component } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import {SharedService} from '../SharedService';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [
        `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
    ]
})
export class HeaderComponent {

    constructor(private authService: AuthService, private router: Router, private sharedService: SharedService) { }



    onLogout() {
        this.authService.logout();
    }

    register() {
        this.router.navigate(['/register']);
    }

    rank() {
        this.router.navigate(['/rank']);
    }
    report() {
        this.router.navigate(['/rank-report']);
    }


}
