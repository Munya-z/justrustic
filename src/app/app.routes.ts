import { HomeComponent } from './componants/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipment', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'contact-us', component: HomeComponent },
  { path: '**', component: HomeComponent },
];
