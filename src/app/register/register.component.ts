import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private UserService: UserService, 
    private toastr: ToastrService, 
    private router: Router) {}

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

    this.toastr.success('Your account has been created', 'Success');
    this.router.navigate(['/login']);

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
