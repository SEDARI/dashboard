import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLogin(state.url);
    }

    checkLogin(url: string): boolean {
        if (this.authenticationService.isLoggedIn) {
            return true;
        }

        // store the attempted URL for later redirecting
        this.authenticationService.redirctUrl = url;

        // let the user login
        this.router.navigate(['/login']);
        return false;
    }
}

