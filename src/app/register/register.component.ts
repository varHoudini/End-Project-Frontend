import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  first_name: any;
  last_name: any;
  birthday: any;
  streetname: any;
  houseNumber: any;
  postalcode: any;
  city: any;
  country: any;
  phone: any;
  password: any;
  username: any;
  showPassword: boolean = false;
  email: any;

  constructor(private UserService: UserService) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log(this.username);
    console.log(this.password);

    // acces the service and send username and password
    this.UserService.register(
      this.first_name,
      this.last_name,
      this.birthday,
      this.streetname,
      this.houseNumber,
      this.postalcode,
      this.city,
      this.country,
      this.email,
      this.phone,
      this.username,
      this.password
    );

    // clear the fields;
    this.first_name = '';
    this.last_name = '';
    this.birthday = '';
    this.streetname = '';
    this.houseNumber = '';
    this.postalcode = '';
    this.city = '';
    this.phone = '';
    this.username = '';
    this.password = '';
    this.email = '';
  }
}
