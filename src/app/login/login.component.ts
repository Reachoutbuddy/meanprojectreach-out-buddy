import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Define the userData object to store user input
  userData: any = {
    email: '',
    password: ''
  };

  // Define the login method to handle form submission
  login() {
    // Add your login logic here, e.g., sending data to a backend API
    console.log('User data:', this.userData);
    // You can add HTTP requests or other login logic here
  }
}



