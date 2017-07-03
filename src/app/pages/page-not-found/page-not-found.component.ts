import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
    previousUrl: string = '/';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd && event.url != this.previousUrl) {
                this.previousUrl = event.url;
            }
        });
    }

    public goBack(): void {
        if (this.previousUrl !== this.router.url) {
            console.log(this.previousUrl);
            this.router.navigate([this.previousUrl]);
        }
    }
}
