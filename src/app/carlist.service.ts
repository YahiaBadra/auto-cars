import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarlistService implements OnInit {
  employees: {
    userId: number;
    firstName: string;
    lastName: string;
    car: string;
  }[] = [];

  carRepaired: {
    username: string;
    userId: string;
    id: string;
    title: string;
    body: string;
  }[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  getCarList(): Observable<
    {
      username: string;
      userId: string;
      id: string;
      title: string;
      body: string;
    }[]
  > {
    return this.http.get<
      {
        username: string;
        userId: string;
        id: string;
        title: string;
        body: string;
      }[]
    >('https://jsonplaceholder.typicode.com/posts');
  }

  getEmployeeList() {
    return this.employees;
  }

  postItem(
    item: { userId: string; id: string; title: string; body: string },
    employee: {
      userId: number;
      firstName: string;
      lastName: string;
      car: string;
    }
  ) {
    this.employees.push(employee);
    return this.http.post('https://jsonplaceholder.typicode.com/posts', item);
  }
  deleteItem(id: string) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
