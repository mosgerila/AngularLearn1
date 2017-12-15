import {Routes} from '@angular/router';

import { ItemsComponent } from '../items/items.component';
import { ServiceComponent } from '../service/service.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Route } from '@angular/router/src/config';



export const routes:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'service', component: ServiceComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]