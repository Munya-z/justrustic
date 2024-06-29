import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-pageheader',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-pageheader.component.html',
  styleUrl: './main-pageheader.component.scss',
})
export class MainPageheaderComponent {}
