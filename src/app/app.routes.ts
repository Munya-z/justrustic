import { Routes } from '@angular/router';
import { AboutUsComponent } from './componants/pages/about-us/about-us.component';
import { EquipmentComponent } from './componants/pages/equipment/equipment.component';
import { GallareyComponent } from './componants/pages/gallarey/gallarey.component';
import { HomeComponent } from './componants/pages/home/home.component';
import { ProductsComponent } from './componants/pages/products/products.component';
import { ContactFormComponent } from './componants/contact-form/contact-form.component';
import { SyrupsComponent } from './componants/pages/syrups/syrups.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'gallarey', component: GallareyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'booking', component: ContactFormComponent },
  { path: 'ordering', component: ContactFormComponent },
  { path: 'syrups', component: SyrupsComponent },
  { path: '**', component: HomeComponent },
];
