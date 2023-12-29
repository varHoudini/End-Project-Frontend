import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; 
import { HomeComponent } from './home/home.component'; 
import { ProductenComponent } from './producten/producten.component'; 
import { HerenComponent } from './producten/heren/heren.component';
import { DamesComponent } from './producten/dames/dames.component';
import { KidsComponent } from './producten/kids/kids.component';

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
    },
    {
        path: 'kids',
        component: KidsComponent
    },
    {
        path: 'heren',
        component: HerenComponent
    },
    {
        path: 'dames',
        component: DamesComponent
    }
];
