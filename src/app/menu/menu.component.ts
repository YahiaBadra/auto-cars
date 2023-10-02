import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  name = 'Rieker cars';
  email = 'yahiabadra@gmail.com';
  imagUrl = 'assets/images/fc.png';
  err = 'image dont read';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    }
    this.email = localStorage.getItem('token')?.toString() ?? '';
  }

  logout() {
    localStorage.removeItem('token');
    this.ngOnInit();
  }
}
