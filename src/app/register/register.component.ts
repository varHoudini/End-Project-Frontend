import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

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
  birthdate: any;
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

  constructor(
    private UserService: UserService,
    private toastr: ToastrService
  ) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log(this.username);
    console.log(this.password);

    // acces the service and send username and password
    this.UserService.register(
      this.username,
      this.password,
      this.first_name,
      this.last_name,
      this.birthdate,
      this.streetname,
      this.houseNumber,
      this.postalcode,
      this.city,
      this.phone,
      this.email,
      this.country
    );
    this.toastr.success('You have registered', 'Yay');

    // clear the fields;
    this.first_name = '';
    this.last_name = '';
    this.birthdate = '';
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
