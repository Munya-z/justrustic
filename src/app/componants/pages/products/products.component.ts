import { Component } from '@angular/core';
import { SecondaryPageheaderComponent } from '../../pageHeaders/secondary-pageheader/secondary-pageheader.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SecondaryPageheaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  title = 'Products';
}
