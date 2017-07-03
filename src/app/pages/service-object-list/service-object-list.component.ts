import {Component, OnInit} from "@angular/core";
import {ServiceObject} from "../../misc/serios-data-types";
import {SeriosApiService} from "../../services/serios-api.service";
import {Router} from "@angular/router";


@Component({
    selector: 'service-object-list',
    templateUrl: './service-object-list.component.html',
    styleUrls: ['./service-object-list.component.css']
})
export class ServiceObjectListComponent implements OnInit {
    private serviceObjectsIds: string[] = [];
    public serviceObjectList: ServiceObject[] = [];

    constructor(private seriosApiService: SeriosApiService, private router: Router) {
    }

    // TODO Phil: this may needs to be adjusted as a order is not fully guaranteed due to async calling.
    ngOnInit(): void {
        this.seriosApiService.getServiceObjects()
            .then(soIDs => {
                this.serviceObjectsIds = soIDs;
                soIDs.forEach(soID => {
                    this.seriosApiService.getServiceObjectDetail(soID).then(so => {
                        this.serviceObjectList.push(so);
                    });
                });
            }).catch(err => console.log(err));

    }

    navToServiceObject(soID: string) {
        this.router.navigate(['serviceobject', soID]);
    }

    navToGateway(gateway: string) {
        this.router.navigate(['gateway', gateway]);
    }
}
