import { Component } from '@angular/core';
import { OdersService } from '../../services/oders.service';

@Component({
  selector: 'app-sevirces',
  standalone: true,
  imports: [],
  templateUrl: './sevirces.component.html',
  styleUrl: './sevirces.component.scss',
})
export class SevircesComponent {
  constructor(private odersService: OdersService) {}

  openDialog(kind: string) {
    this.odersService.openDialog(kind);
  }

  closeDialog(kind: string) {
    this.odersService.closeDialog(kind);
  }

  bookService(order: any) {
    this.odersService.bookService(order);
  }

  servicesOferred = [
    {
      name: 'catering',
      discription: 'mobile, featuring professionally trained chefs and waiters',
      cost: 'contact us for pricing',
    },
    {
      name: 'Event planning and coordinating',
      discription: 'for wedding, coporate function, or private celebrations',
      cost: '1hr 650 ZAR',
    },
    {
      name: 'mobile bar services',
      discription:
        'Experience the rustic charm with our team of mixologists and their crafted cocktails',
      cost: '1hr 300 ZAR',
    },
    {
      name: 'decor',
      discription: 'for wedings, corporate events or intimate gathering',
      cost: 'contact us for pricing',
    },
  ];
}
