import { Route, Routes, RouterModule } from "@angular/router";
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';

const routes:Routes=[
    {
        path:'', component:ClientComponent
    },
    {
        path:'admin', component:AdminComponent
    }
]
export const AppRouting= RouterModule.forRoot(routes)