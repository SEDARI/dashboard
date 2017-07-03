import {Component, OnInit} from "@angular/core";
import {ServiceObject} from "../../misc/serios-data-types";
import {SeriosApiService} from "../../services/serios-api.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'service-object-detail',
    templateUrl: './service-object-detail.component.html',
    styleUrls: ['./service-object-detail.component.css']
})

export class ServiceObjectDetailComponent implements OnInit {
    serviceobject: ServiceObject;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private seriosApiService: SeriosApiService) {
    }

    ngOnInit(): void {
        let soID = this.route.snapshot.params['soID'];
        this.seriosApiService.getServiceObjectDetail(soID)
            .then(so => {
                this.serviceobject = so;
            })
            .catch(err => {
                console.log(err);
                this.router.navigate(['/so404']);
            });
    }

    navToGateway(gateway: string) {
        console.log('trying to redirect to ' + gateway);
        this.router.navigate(['gateway', gateway]);
    }
}
