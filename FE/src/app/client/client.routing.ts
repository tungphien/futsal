import { Route, Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
    {
        path: '', component: ClientComponent, children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'about', component: AboutComponent
            }
        ]
    }
]
export const ClientRouting = RouterModule.forRoot(routes)