import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-scolling-imgs',
  standalone: true,
  imports: [],
  templateUrl: './scolling-imgs.component.html',
  styleUrl: './scolling-imgs.component.scss',
})
export class ScollingImgsComponent {
  @ViewChildren('scrollers') scrollers!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewChecked() {
    // If a user hasn't opted in for recuded motion, then we add the animation
    // if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    this.addAnimation();
    // }
  }

  addAnimation() {
    this.scrollers.forEach((scrollerRef) => {
      const scroller = scrollerRef.nativeElement;

      this.renderer.setAttribute(scroller, 'data-animated', 'true');

      const scrollerInner = scroller.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner!.children);

      scrollerContent.forEach((item: any) => {
        const duplicatedItem = this.renderer.createElement(
          item.tagName.toLowerCase()
        );
        this.renderer.setProperty(duplicatedItem, 'innerHTML', item.innerHTML);
        this.renderer.setAttribute(duplicatedItem, 'aria-hidden', 'true');
        this.renderer.appendChild(scrollerInner, duplicatedItem);
      });
    });
  }
}
