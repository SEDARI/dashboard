import {NgModule}                from '@angular/core';
import {BrowserModule}           from '@angular/platform-browser';
import {AppComponent}            from './app.component';
import {AppRoutingModule}        from "./app-routing.module";
import {HttpModule}              from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {MdToolbarModule}         from "@angular/material"
import {MdButtonModule}          from "@angular/material"

import {PageNotFoundComponent}          from "./pages/page-not-found/page-not-found.component";
import {LoginComponent}                 from "./pages/login/login.component";
import {ServiceObjectDetailComponent}   from "./pages/service-object-detail/service-object-detail.component";
import {ServiceObjectListComponent}     from "./pages/service-object-list/service-object-list.component";
import {DashboardComponent}             from "./pages/dashboard/dashboard.component";
import {ServiceObjectNotFoundComponent} from "./pages/service-object-not-found/service-object-not-found.component";
import {SeriosApiService}               from "./services/serios-api.service";
import {SettingsComponent}              from "./pages/settings/settings.component";
import {NerosComponent}                 from "./pages/neros/neros.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        MdToolbarModule,
        MdButtonModule,

        // own modules
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        LoginComponent,
        ServiceObjectDetailComponent,
        ServiceObjectListComponent,
        DashboardComponent,
        ServiceObjectNotFoundComponent,
        NerosComponent,
        LoginComponent,
        SettingsComponent
    ],
    providers: [
        SeriosApiService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
