import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  Router,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { OdersService } from './services/oders.service';
import { BottomNavigationComponent } from './componants/navigation/bottom-navigation/bottom-navigation.component';
import { TopNavigationComponent } from './componants/navigation/top-navigation/top-navigation.component';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopNavigationComponent,
    BottomNavigationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  scrollers = document.querySelectorAll<HTMLElement>('.scroller');

  constructor(
    public odersService: OdersService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    sessionStorage.setItem('cart', JSON.stringify([]));
    sessionStorage.setItem('serviceBooked', JSON.stringify([]));
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute.fragment.subscribe((data) => {
          if (data! != null) {
            return;
          } else {
            window.scrollTo(0, 0);
          }
        });
      }
    });
  }
}
