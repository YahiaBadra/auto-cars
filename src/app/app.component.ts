import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSideNav = true;
  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (router.url === '/' || router.url === '/not-found') {
        this.showSideNav = false;
      } else {
        this.showSideNav = true;
      }
      console.log(this.showSideNav);
    });
  }
}
