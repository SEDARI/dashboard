import {Component} from '@angular/core';
import {SeriosApiService} from "./services/serios-api.service";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuardService} from "./services/auth-guard.service";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        SeriosApiService,
        AuthenticationService,
        AuthGuardService
    ]
})
export class AppComponent {
    constructor(public authenticationService: AuthenticationService) {
    }
}
