import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

let count = 0;
@Component({
  selector: 'app-navigation-page1',
  templateUrl: './navigation-page1.component.html',
  standalone: false
})
export class NavigationPage1Component {
  constructor(
    private navController: NavController
  ) {}

  ionViewDidEnter() {
    if (count < 1) {
      this.navController.navigateBack('/lazy/navigation/page2');
    }
    count++;
  }
}
