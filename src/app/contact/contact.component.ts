import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  validEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  submit() {
    if (this.name.length <= 0) {
      alert('Enter your name');
    } else if (!this.validEmail(this.email)) {
      alert('Enter a valid email');
    } else if (this.message.length < 20) {
      alert('Enter a description');
    } else {
      alert('It submitted it successfully.');
    }
  }
}
