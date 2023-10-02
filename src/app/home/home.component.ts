import { Component } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public router: Router) {}

  employees = [
    {
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      car: 'Toyota Camry',
    },
    {
      userId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      car: 'Honda Civic',
    },
  ];

  onClickPanne(employee: {
    userId: number;
    firstName: string;
    lastName: string;
    car: string;
  }) {
    const navigationExtras: NavigationExtras = {
      state: {
        employee: employee,
      },
    };

    this.router.navigate(['breakdown'], navigationExtras);
  }
}
