import { Component } from '@angular/core';

@Component({
  selector: 'app-lscar',
  templateUrl: './lscar.component.html',
  styleUrls: ['./lscar.component.css'],
})
export class LscarComponent {
  client = [
    {
      name: 'yhaia',
      age: 23,
    },
    {
      name: 'sami',
      age: 26,
    },
  ];
}
