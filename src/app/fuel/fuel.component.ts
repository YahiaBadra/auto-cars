import { Component } from '@angular/core';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css'],
})
export class FuelComponent {
  car = {
    fuel: '',
    img: '/assets/images/car.png',
    model: 'KIA PRICE',
    transmission: 'Automatic',
    engine: 'Gasoline',
    color: 'White',
    avgcfuel: '8.5 liters per 100 kilometers',
  };
}
