import { Component } from '@angular/core';

@Component({
  selector: 'app-sevirces',
  standalone: true,
  imports: [],
  templateUrl: './sevirces.component.html',
  styleUrl: './sevirces.component.scss',
})
export class SevircesComponent {
  servicesOferred = [
    {
      name: 'catering',
      discription:
        'we have a team of chefs, waiters and bartenders ready for all you catering needs',
      duration: '1hr',
      cost: '450',
    },
    {
      name: 'Event planning and coordinating',
      discription:
        'we have a team of chefs, waiters and bartenders ready for all you catering needs',
      duration: '1hr',
      cost: '650',
    },
    {
      name: 'mobile bar services',
      discription:
        'we have a team of chefs, waiters and bartenders ready for all you catering needs',
      duration: '1hr',
      cost: '300',
    },
    {
      name: 'decor',
      discription:
        'we have a team of chefs, waiters and bartenders ready for all you catering needs',
      duration: '',
      cost: '4,500',
    },
  ];
}
