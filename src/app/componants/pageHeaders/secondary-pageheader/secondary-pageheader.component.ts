import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-secondary-pageheader',
    imports: [],
    templateUrl: './secondary-pageheader.component.html',
    styleUrl: './secondary-pageheader.component.scss'
})
export class SecondaryPageheaderComponent {
  @Input() pageOpened: string = '';
}
