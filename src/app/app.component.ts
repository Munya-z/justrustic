import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from './componants/top-navigation/top-navigation.component';
import { BottomNavigationComponent } from './componants/bottom-navigation/bottom-navigation.component';
import { OdersService } from './services/oders.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopNavigationComponent,
    BottomNavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public odersService: OdersService) {
    sessionStorage.setItem('cart', JSON.stringify([]));
  }
  closeDialog(arg0: string) {
    this.odersService.closeDialog(arg0);
  }

  removeFromCart(arg0: any) {
    this.odersService.removeFromCart(arg0);
  }

  title = 'fds';
}
