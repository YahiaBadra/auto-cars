import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarlistService } from '../carlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breakdownlist',
  templateUrl: './breakdownlist.component.html',
  styleUrls: ['./breakdownlist.component.css'],
})
export class BreakdownlistComponent implements OnInit {
  carList: {
    username: string;
    userId: string;
    id: string;
    title: string;
    body: string;
  }[] = [];
  employeeList: {
    userId: number;
    firstName: string;
    lastName: string;
    car: string;
  }[] = [];
  isLoading = true;
  constructor(private carListService: CarlistService, private route: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.carListService.getCarList().subscribe(
      (data) => {
        this.carList = data;
        this.employeeList = this.carListService.getEmployeeList();

        this.carList = this.carList.map((car) => {
          const employee = this.employeeList.find(
            (emp) => emp.userId.toString() === car.userId
          );
          if (employee) {
            return { ...car, username: employee.firstName };
          }
          return car;
        });

        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  deleteItem(id: string) {
    this.carListService.deleteItem(id).subscribe(
      (success) => {
        console.log('Delete');

        this.carListService.carRepaired.push(
          this.carList.find((item) => item.id === id)!
        );

        this.carList = this.carList.filter((item) => item.id !== id);

        this.route.navigate(['repaired']);
      },
      (err) => console.log(err)
    );

    // const index = this.employeeList.findIndex(
    //   (emp) => emp.userId.toString() === id
    // );

    // if (index !== -1) {
    //   this.employeeList.splice(index, 1);

    //   this.carList = this.carList.filter((car) => car.userId !== id);
    // }
  }
}
