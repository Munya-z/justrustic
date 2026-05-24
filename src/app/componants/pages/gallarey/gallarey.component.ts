import { Component } from '@angular/core';
import { SecondaryPageheaderComponent } from '../../pageHeaders/secondary-pageheader/secondary-pageheader.component';

@Component({
    selector: 'app-gallarey',
    imports: [SecondaryPageheaderComponent],
    templateUrl: './gallarey.component.html',
    styleUrl: './gallarey.component.scss'
})
export class GallareyComponent {
  title = 'Gallarey';

  pictures = [
  'assets/images/1000030030.jpg',
  'assets/images/1000030055.jpg',
  'assets/images/1000030059.jpg',
  'assets/images/1000030061.jpg',
  'assets/images/1000037697.jpg',
  'assets/images/1000067747.jpg',
  'assets/images/1000070903.jpg',
  'assets/images/1000071784.jpg',
  'assets/images/1000098324.jpg',
  'assets/images/1000122079.jpg',
  'assets/images/1000122083.jpg',
  'assets/images/1000122086.jpg',
  'assets/images/1000235431.jpg',
  'assets/images/1000235437.jpg',
  'assets/images/1000241516.jpg',
  'assets/images/1000241537.jpg',
  'assets/images/1000241612.jpg',
  'assets/images/1000277016.jpg',
  'assets/images/1000277069.jpg',
  'assets/images/1000278976.jpg',
  'assets/images/barSetup2.jpg',
  'assets/images/barbeforeStarting.jpg',
  'assets/images/behindTheBar.jpg',
  'assets/images/fullBar.jpg',
  'assets/images/happyClient.jpg',
  'assets/images/justRusticBarSetup.jpg',
  'assets/images/kiethWithHappyClient.jpg',
  'assets/images/makingCocktail.jpg',
  'assets/images/makingCocktail2.jpg',
  'assets/images/mobileBar.jpg',
  'assets/images/mobileBarFromBehind.jpg',
  'assets/images/peopleEating.jpg',
  'assets/images/talkingatMobileBar.jpg',
  'assets/images/team.jpg',
  'assets/images/withTheTeam.jpg'
];
}
