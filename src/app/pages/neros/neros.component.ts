import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/Observable'

@Component({
    selector: 'neros',
    templateUrl: './neros.component.html',
    styleUrls: ['./neros.component.css']
})
export class NerosComponent implements OnInit {
    constructor(private http: Http) {
    }

    ngOnInit(): void {
    }
}
