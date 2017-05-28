import {Component} from "@angular/core";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    message: string;

    constructor(public authenticationService: AuthenticationService, public router: Router) {
    }

    setMessage() {
        this.message = 'Logged ' + (this.authenticationService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in...';

        this.authenticationService.login().subscribe(() => {
            this.setMessage();
            if (this.authenticationService.isLoggedIn) {
                // get saved redirect from authentication service
                let redirect = this.authenticationService.redirctUrl;
                redirect = redirect ? redirect : '/';

                // redirect the user
                this.router.navigate([redirect]);
            }
        });
    }

    logout() {
        this.message = 'Trying to logout...';

        this.authenticationService.logout().subscribe(() => {
            this.setMessage();
            this.router.navigate(['/'])
        });
    }
}
