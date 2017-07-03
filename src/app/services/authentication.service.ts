import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable"

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {ObjectUnsubscribedError} from "rxjs/Rx";


@Injectable()
export class AuthenticationService {
    isLoggedIn: boolean = false;
    redirctUrl: string;
    authorizationToken: string;

    login(): Observable<string> {
        // TODO Phil 13/05/17: add call to identity management system
        return Observable.of('2932942f823b82ab34').delay(2000).do(token => {
            this.isLoggedIn = true;
            this.authorizationToken = token;
        });
    }

    logout(): Observable<void> {
        return Observable.of(null).delay(2000).do(val => {
            this.isLoggedIn = false;
            this.authorizationToken = null;
        });
    }

}
