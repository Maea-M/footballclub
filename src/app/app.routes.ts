import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import path from 'path';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'header', component: HeaderComponent}
];
