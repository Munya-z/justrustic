import { Component } from '@angular/core';

@Component({
    selector: 'app-testimonial',
    imports: [],
    templateUrl: './testimonial.component.html',
    styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
    
    testimonials = [1, 2, 3, 4]; 
    activeIndex = 0;

    updateDots(event: any) {
        const element = event.target;
        const scrollPercentage = element.scrollLeft / (element.scrollWidth - element.clientWidth);
        const index = Math.round(scrollPercentage * (this.testimonials.length - 1));
        this.activeIndex = index;
    }

}
