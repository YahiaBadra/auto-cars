import { Component, OnInit } from '@angular/core';
import { CarlistService } from '../carlist.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-car-breakdown',
  templateUrl: './car-breakdown.component.html',
  styleUrls: ['./car-breakdown.component.css'],
})
export class CarBreakdownComponent implements OnInit {
  employee: any = {
    userId: 0,
    firstName: '',
    lastName: '',
    car: '',
  };

  id = '';
  title = '';
  body = '';
  photo = '';

  constructor(
    private carService: CarlistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (window.history.state.employee) {
        const employee = window.history.state.employee;
        this.employee = employee;
        console.log({ employee: this.employee });
      }
    });
  }

  validateFields() {
    if (this.title.length <= 5) {
      alert('Please enter a title with at least 5 chars');
    } else if (this.body.length <= 20) {
      alert('Please enter a description with at least 20 chars');
    } else {
      this.postData();
    }
  }

  postData() {
    this.carService
      .postItem(
        {
          id: this.id,
          userId: this.employee.userId.toString(),
          title: this.title,
          body: this.body,
        },
        this.employee
      )
      .subscribe(
        (data) => {
          alert('You submitted the breakdown successfully.');
          this.router.navigate(['breakdownList']);
        },
        (error) => console.log(error)
      );
  }

  addBreakdown() {
    this.validateFields();
  }
}

// userId, userFirstName,userLastName, car
// id , title, description , photo
