import { ProductsComponent } from './componants/products/products.component';
import { HomeComponent } from './componants/home/home.component';
import { Routes } from '@angular/router';
import { EquipmentComponent } from './componants/equipment/equipment.component';
import { GallareyComponent } from './componants/gallarey/gallarey.component';
import { AboutUsComponent } from './componants/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'gallarey', component: GallareyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: HomeComponent },
];
