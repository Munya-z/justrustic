import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MainPageheaderComponent } from '../../pageHeaders/main-pageheader/main-pageheader.component';
import { ScollingImgsComponent } from '../../partials/scolling-imgs/scolling-imgs.component';
import { TestimonialComponent } from '../../partials/testimonial/testimonial.component';
import { ServicesComponent } from '../../pages/services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServicesComponent,
    RouterLink,
    ScollingImgsComponent,
    MainPageheaderComponent,
    TestimonialComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  jumpToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    this.activeRoute.fragment.subscribe((data) => {
      if (data! != null) {
        this.jumpToSection(data!);
        return;
      } else {
        console.log('no data');
        window.scrollTo(0, 0);
      }
    });
  }
}
