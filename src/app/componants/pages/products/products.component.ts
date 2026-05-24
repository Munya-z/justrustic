import { Component } from '@angular/core';
import { SecondaryPageheaderComponent } from '../../pageHeaders/secondary-pageheader/secondary-pageheader.component';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-products',
    imports: [SecondaryPageheaderComponent, RouterLink],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss'
})
export class ProductsComponent {
  title = 'Products';
  syrups = [1, 2, 3, 4]; 
    activeSyrupIndex = 0;

    updateSyrupDots(event: any) {
        const element = event.target;
        const scrollPercentage = element.scrollLeft / (element.scrollWidth - element.clientWidth);
        const index = Math.round(scrollPercentage * (this.syrups.length - 1));
        this.activeSyrupIndex = index;
    }
}
