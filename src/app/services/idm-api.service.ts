import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./authentication.service";

/**
 * This service handles all communication to the serios API.
 */
@Injectable()
export class IdmApiService {
    // TODO update the base URL
    private apiBaseUrl = "http://localhost:6000/api/";

}

