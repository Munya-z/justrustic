import { afterNextRender, Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { OdersService } from './services/oders.service';
import { BottomNavigationComponent } from './componants/navigation/bottom-navigation/bottom-navigation.component';
import { TopNavigationComponent } from './componants/navigation/top-navigation/top-navigation.component';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true, // Assuming standalone based on your imports
  imports: [
    CommonModule,
    RouterOutlet,
    TopNavigationComponent,
    BottomNavigationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);
  
  scrollers: any;

  constructor(public odersService: OdersService) {
    // afterNextRender only runs in the browser, safely avoiding "window is not defined"
    afterNextRender(() => {
      // 1. DOM manipulation is safe here
      this.scrollers = document.querySelectorAll<HTMLElement>('.scroller');

      // 2. Initialize storage safely
      sessionStorage.setItem('cart', JSON.stringify([]));
      sessionStorage.setItem('serviceBooked', JSON.stringify([]));

      // 3. Handle Scroll to Top on Navigation
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.activeRoute.fragment.subscribe((fragment) => {
          if (!fragment) {
            window.scrollTo(0, 0);
          }
        });
      });
    });
  }
}
