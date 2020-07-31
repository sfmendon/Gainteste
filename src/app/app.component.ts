import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traderGain';

  sideBarOpen = true;

  sideBarToggler($event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
