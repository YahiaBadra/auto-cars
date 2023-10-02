import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = '';
  email = '';
  pass = '';

  constructor(private router: Router) {}

  register() {
    if (this.name.length <= 0) {
      alert('Please enter your name');
    } else if (!this.validEmail(this.email)) {
      alert('Invalid Email');
    } else if (this.pass.length <= 0) {
      alert('Please enter password');
    } else {
      alert('Successfully registered in.');
      this.router.navigate(['/home']);
    }
  }

  validEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
}
