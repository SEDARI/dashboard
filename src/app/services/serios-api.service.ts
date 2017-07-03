import {Injectable} from "@angular/core";
import {ServiceObject, Gateway, SensorData} from "../misc/serios-data-types";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./authentication.service";

/**
 * This service handles all communication to the serios API.
 */
@Injectable()
export class SeriosApiService {
    // TODO update the base URL
    private apiBaseUrl = "http://localhost:5000/api/";
    private apiGatewayUrl = this.apiBaseUrl + "gateway/";

    constructor(private http: Http, private authService: AuthenticationService) {
    }

    getGatewayDetail(gatewayID: string): Promise<Gateway> {
        return this.http.get(this.gatewayUrl(gatewayID), this.headers())
            .toPromise()
            .then(res => res.json() as Gateway);
    }

    getGateways(): Promise<string[]> {
        return this.http.get(`${this.apiGatewayUrl}`, this.headers())
            .toPromise()
            .then(res => res.json().data as string[]);
    }

    // TODO Phil 12/05/17: maybe the promise does need a return type.
    deleteGateway(gatewayID: string): Promise<{}> {
        return this.http.delete(this.gatewayUrl(gatewayID), this.headers())
            .toPromise();
    }

    /**
     * TODO Phil: obviously this needs to be adjusted.
     *
     * @returns {Promise<string>}
     */
    getServiceObjectDetail(soID: string): Promise<ServiceObject> {
        // return this.http.get(this.serviceObjectUrl(soID), this.headers())
        //     .toPromise()
        //     .then(res => res.json() as ServiceObject);
        return this.http.get('app/test/so.json')
            .toPromise()
            .then(res => {
                let json = res.json()[soID];
                if (json) {
                    return json;
                } else {
                    return Promise.reject("Could not find Service Object " + soID);
                }
            });
    }

    /**
     * TODO Phil: obviously this needs to be adjusted.
     *
     * @returns {Promise<string[]>}
     */
    getServiceObjects(): Promise<string[]> {
        // return this.http.get(`${this.apiBaseUrl}`, this.headers())
        //     .toPromise()
        //     .then(res => res.json().data as string[]);
        return this.http.get('app/test/so.json')
            .toPromise()
            .then(res => res.json().data as string[]);
    }

    deleteServiceObject(soID: string): Promise<{}> {
        return this.http.delete(this.serviceObjectUrl(soID), this.headers())
            .toPromise();
    }

    getSensorData(soID: string, streamID: string): Promise<SensorData[]> {
        return this.http.get(this.senDataUrl(soID, streamID), this.headers())
            .toPromise()
            .then(res => res.json() as SensorData[]);
    }

    deleteSensorData(soID: string, streamID: string): Promise<{}> {
        return this.http.delete(this.senDataUrl(soID, streamID), this.headers())
            .toPromise();
    }

    private serviceObjectUrl(soID: string) {
        return `${this.apiBaseUrl}${soID}`;
    }

    private senDataUrl(soID: string, streamID: string) {
        return `${this.apiBaseUrl}${soID}/streams/${streamID}`;
    }

    private gatewayUrl(gatewayID: string) {
        return `${this.apiGatewayUrl}${gatewayID}`;
    }

    private headers(): Headers {
        let headers = new Headers();

        headers.append('Authorization', this.authService.authorizationToken);
        return headers;
    }
}
