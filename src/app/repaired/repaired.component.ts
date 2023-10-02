import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { CarlistService } from '../carlist.service';

@Component({
  selector: 'app-repaired',
  templateUrl: './repaired.component.html',
  styleUrls: ['./repaired.component.css'],
})
export class RepairedComponent implements OnInit {
  list: any = [];
  constructor(public router: Router, private carListService: CarlistService) {}
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

  ngOnInit(): void {
    this.list = this.carListService.carRepaired;
    console.log(this.list);
  }

  onCarDeleted(deletedCar: any) {
    this.employees.push(deletedCar);
  }
}
