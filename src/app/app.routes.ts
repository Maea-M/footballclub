import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import path from 'path';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
];
