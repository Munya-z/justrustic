import { Component } from '@angular/core';
import { OdersService } from '../../../services/oders.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-services',
    imports: [RouterLink],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private odersService: OdersService, private router: Router) {}

    


  bookService(order: any) {
    this.odersService.bookService(order);
    this.router.navigate(['/booking']);
  }
}
