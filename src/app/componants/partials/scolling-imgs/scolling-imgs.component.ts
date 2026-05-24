
import { 
  Component, 
  ElementRef, 
  Renderer2, 
  ViewChildren, 
  QueryList, 
  afterNextRender // 1. Import this
} from '@angular/core';

@Component({
  selector: 'app-scolling-imgs',
  standalone: true,
  imports: [],
  templateUrl: './scolling-imgs.component.html',
  styleUrl: './scolling-imgs.component.scss'
})
export class ScollingImgsComponent {
  @ViewChildren('scrollers') scrollers!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {

    afterNextRender(() => {

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.addAnimation();
      }
    });
  }

  addAnimation() {
    this.scrollers.forEach((scrollerRef) => {
      const scroller = scrollerRef.nativeElement;
      this.renderer.setAttribute(scroller, 'data-animated', 'true');
      
      const scrollerInner = scroller.querySelector('.scroller__inner');
      if (!scrollerInner) return;

      if (scrollerInner.getAttribute('data-cloned') === 'true') return;
      
      const scrollerContent = Array.from(scrollerInner.children);
      
      scrollerContent.forEach((item: any) => {
        const duplicatedItem = item.cloneNode(true); 
        this.renderer.setAttribute(duplicatedItem, 'aria-hidden', 'true');
        this.renderer.appendChild(scrollerInner, duplicatedItem);
      });

      this.renderer.setAttribute(scrollerInner, 'data-cloned', 'true');
    });
  }
}
