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

    login(): Observable<boolean> {
        // TODO Phil 13/05/17: add call to identity management system
        return Observable.of(true).delay(2000).do(val => this.isLoggedIn = true);
    }

    logout(): Observable<boolean> {
        return Observable.of(false).delay(2000).do(val => this.isLoggedIn = false);
    }

}
