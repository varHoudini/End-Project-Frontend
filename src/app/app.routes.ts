import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { KidsComponent } from './producten/kids/kids.component';
import { HerenComponent } from './producten/heren/heren.component';
import { DamesComponent } from './producten/dames/dames.component';
import { ProductenComponent } from './producten/producten.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'producten',
    component: ProductenComponent,
  },
  {
    path: 'kids',
    component: KidsComponent,
  },
  {
    path: 'heren',
    component: HerenComponent,
  },
  {
    path: 'dames',
    component: DamesComponent,
  },
];
