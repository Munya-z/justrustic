import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-navigation.component.html',
  styleUrl: './top-navigation.component.scss',
})
export class TopNavigationComponent {
  togglePopupNav() {
    const nav = document.querySelector('.side-nav-popup');
    nav?.classList.toggle('visible');
  }
}
