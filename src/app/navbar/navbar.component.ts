import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user = {
    name: 'yahia',
    sexe: 'Homme',
    imgurl: 'assets/images/im1.jpg',
  };
}
