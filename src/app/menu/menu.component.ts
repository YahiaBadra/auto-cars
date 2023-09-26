import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  Name = 'yahia badra';
  Email = 'yahiabadra@gmail.com';
  imagUrl = 'assets/images/fc.png';
  err = 'image dont read';
}
