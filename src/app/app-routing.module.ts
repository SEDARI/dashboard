import {NgModule}      from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

/**
 * Custom components, which are placed in their own directory.
 */
import {ServiceObjectDetailComponent} from './pages/service-object-detail/service-object-detail.component'
import {ServiceObjectListComponent} from './pages/service-object-list/service-object-list.component'
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ServiceObjectNotFoundComponent} from "./pages/service-object-not-found/service-object-not-found.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {LoginComponent} from "./pages/login/login.component";
import {NerosComponent} from "./pages/neros/neros.component";

/**
 * Routing configuration of the application.
 */
const routes: Routes = [
    {
        path: 'serviceobject/:soID',
        component: ServiceObjectDetailComponent
    },
    {
        path: 'serviceobjects',
        component: ServiceObjectListComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'neros',
        component: NerosComponent
    },
    {
        path: 'so404',
        component: ServiceObjectNotFoundComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
