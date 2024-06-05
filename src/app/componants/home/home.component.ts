import { Component } from '@angular/core';
import { SevircesComponent } from '../sevirces/sevirces.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SevircesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
