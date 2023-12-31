import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  pass = '';

  constructor(private router: Router) {}

  login() {
    if (!this.validEmail(this.email)) {
      alert('Invalid Email');
    } else if (this.pass.length <= 0) {
      alert('Please enter password');
    } else {
      localStorage.setItem('token', this.email);

      alert('Successfully logged in.');

      this.router.navigate(['/home']);
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  validEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
}
