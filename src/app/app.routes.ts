import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; 
import { HomeComponent } from './home/home.component'; 
import { ProductenComponent } from './producten/producten.component'; 

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'producten',
        component: ProductenComponent
    }
];
