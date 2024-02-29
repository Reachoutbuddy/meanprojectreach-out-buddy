
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // Define the userData object to store user input
  userData: any = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Define the register method to handle form submission
  register() {
    // Add your registration logic here, e.g., sending data to a backend API
    console.log('User data:', this.userData);
    // You can add HTTP requests or other registration logic here
  }
}

