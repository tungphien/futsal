import { Route, Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';
import { StadiumAdminComponent } from './components/stadiumadmin/stadiumadmin.component';
import { StadiumadminaddComponent } from './components/stadiumadminadd/stadiumadminadd.component';
import { StadiumadminlistComponent } from './components/stadiumadminlist/stadiumadminlist.component';

const routes: Routes = [
    {
        path: 'admin', component: null, children: [
            {
                path: '', component: AdminComponent
            },
            {
                path: 'stadium', component: StadiumAdminComponent, children: [
                    { path: '', component: StadiumadminlistComponent },
                    { path: 'add', component: StadiumadminaddComponent }
                ]
            }
        ]
    }
]
export const AdminRouting = RouterModule.forRoot(routes)