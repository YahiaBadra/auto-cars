import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public router: Router) {}

  employees = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      car: 'Toyota Camry',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      car: 'Honda Civic',
    },
  ];

  onClickPanne(id: number) {
    this.router.navigate(['breakdown', { id: id }]);
  }
}
