import { Component, computed, signal } from '@angular/core';
import { OdersService } from '../../services/oders.service';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss',
})
export class EquipmentComponent {
  equipment = [
    {
      name: '2 piece platted Boston shaker',
      image: '/assets/products/2 Piece Boston Shaker.png',
      price: 390.6,
    },
    {
      name: '30-45ml 30-60ml Spirit Measuring Jigger',
      image:
        '/assets/products/30-45ml 30-60m Stainless Steel Double Shot Drink Spirit Measuring Jigger.png',
      price: null,
    },
    {
      name: '100ml Clear Plastic Spray Bottle',
      image: '/assets/products/100ml Clear Plastic Spray Bottle.png',
      price: null,
    },
    {
      name: '15-30ml 25-50m Stainless Steel Spirit Measuring Jigger',
      image:
        '/assets/products/15-30ml 25-50m Stainless Steel Spirit Measuring Jigger.png',
      price: 100,
    },
    {
      name: '500ml Glass Studded Cocktail Mixing Glass',
      image: '/assets/products/500ml Glass Studded Cocktail Mixing Glass.png',
      price: 400,
    },
    {
      name: 'Aroma Smoke Bubble Gun ,Vapour Blaster Cocktail Bubble Smoke Gun,',
      image:
        '/assets/products/Aroma Smoke Bubble Gun ,Vapour Blaster Cocktail Bubble Smoke Gun,.png',
      price: null,
    },
    {
      name: 'Hawthorn Strainer 4 Ear',
      image: '/assets/products/Hawthorn Strainer 4 Ear.jpeg',
      price: '68.90',
    },
    {
      name: 'Hawthorn Strainer Copper 20cm-UB',
      image: '/assets/products/Hawthorn Strainer Copper 20cm-UB.jpg',
      price: null,
    },
    {
      name: 'Hawthorn Strainer Gold',
      image: '/assets/products/Hawthorn Strainer Gold.jpg',
      price: null,
    },
    {
      name: 'Cocktail Smoker Kit for Whiskey',
      image: '/assets/products/Cocktail Smoker Kit for Whiskey.png',
      price: null,
    },
    {
      name: 'Creative Manual Wine Opener Corkscrew',
      image: '/assets/products/Creative Manual Wine Opener Corkscrew.png',
      price: null,
    },
    {
      name: 'Flavor Blaster Smoked Bubble Gun',
      image: '/assets/products/Flavor Blaster Smoked Bubble Gun.png',
      price: null,
    },
    {
      name: 'Multifunction Wine Corkscrew Bottle Opener',
      image: '/assets/products/Multifunction Wine Corkscrew Bottle Opener.png',
      price: null,
    },
    {
      name: 'Plastic Flair Bottle',
      image: '/assets/products/Plastic Flair Bottle.jpg',
      price: 550,
    },
    {
      name: 'Premium Cocktail Shaker Set-Piece Pro Boston Shaker Set.',
      image:
        '/assets/products/Premium Cocktail Shaker Set-Piece Pro Boston Shaker Set..png',
      price: 315.0,
    },
    {
      name: 'Professional Bartender Travel Bag Portable shaker set Rose Gold Plated',
      image:
        '/assets/products/Professional Bartender Travel Bag Portable shaker set Rose Gold Plated.png',
      price: 891.63,
    },
    {
      name: 'Stainless Steel Cocktail Mixing Glass  Rose Gold, Silver, Gold Plated',
      image:
        '/assets/products/Stainless Steel Cocktail Mixing Glass  Rose Gold, Silver, Gold Plated.png',
      price: null,
    },
    {
      name: 'Stainless Steel Fine Mesh Strainer',
      image: '/assets/products/Stainless Steel Fine Mesh Strainer.jpeg',
      price: 70,
    },
    {
      name: 'Wine Stopper Twist Cap Plug Reusable Vacuum Sealed Bottle Cap',
      image:
        '/assets/products/Wine Stopper Twist Cap Plug Reusable Vacuum Sealed Bottle Cap.png',
      price: null,
    },
    {
      name: 'Black Cocktail Fine Mesh Strainer',
      image: '/assets/products/Black Cocktail Fine Mesh Strainer.jpeg',
      price: null,
    },
    {
      name: 'Stainless Steel Mixer Bartender Kit With Wood Stand Boston Shaker Utensils Mixer Kit',
      image:
        '/assets/products/Stainless Steel Mixer Bartender Kit With Wood Stand Boston Shaker Utensils Mixer Kit.png',
      price: '650.00',
    },
  ];

  constructor(public odersService: OdersService) {}

  addToCart(item: any) {
    this.odersService.addToCart(item);
  }

  openDialog(kind: string) {
    this.odersService.openDialog(kind);
  }

  closeDialog(kind: string) {
    this.odersService.closeDialog(kind);
  }
}
