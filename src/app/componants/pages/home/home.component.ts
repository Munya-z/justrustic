import { Component, inject, afterNextRender } from '@angular/core'; // 1. Add afterNextRender
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MainPageheaderComponent } from '../../pageHeaders/main-pageheader/main-pageheader.component';
import { ScollingImgsComponent } from '../../partials/scolling-imgs/scolling-imgs.component';
import { TestimonialComponent } from '../../partials/testimonial/testimonial.component';
import { ServicesComponent } from '../../pages/services/services.component';

@Component({
  selector: 'app-home',
  imports: [
    ServicesComponent,
    RouterLink,
    ScollingImgsComponent,
    MainPageheaderComponent,
    TestimonialComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    afterNextRender(() => {
      this.activeRoute.fragment.subscribe((data) => {
        if (data != null) {
          this.jumpToSection(data);
        } else {
          window.scrollTo(0, 0);
        }
      });
    });
  }

  jumpToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

 
}
