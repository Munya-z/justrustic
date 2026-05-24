import { afterNextRender, Component, inject } from '@angular/core';
import { SecondaryPageheaderComponent } from '../../pageHeaders/secondary-pageheader/secondary-pageheader.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-syrups',
  imports: [SecondaryPageheaderComponent],
  templateUrl: './syrups.component.html',
  styleUrl: './syrups.component.scss'
})
export class SyrupsComponent {
  private viewportScroller = inject(ViewportScroller);

  title: string = 'Syrups';

  constructor() {
    afterNextRender(() => {

      this.viewportScroller.setOffset([0, 120]); 
    });

  }
}

