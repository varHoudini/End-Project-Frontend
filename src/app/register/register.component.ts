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
  firstname: any;
  lastname: any;
  birthdate: any;
  street: any;
  number: any;
  zipcode: any;
  city: any;
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
    this.UserService.register(this.username, this.password, this.firstname, this.lastname, this.birthdate, this.street, this.number, this.zipcode, this.city, this.phone, this.email);
    this.toastr.success('You have registered', 'Yay');

    // clear the fields;
    this.firstname = '';
    this.lastname = '';
    this.birthdate = '';
    this.street = '';
    this.number = '';
    this.zipcode = '';
    this.city = '';
    this.phone = '';
    this.username = '';
    this.password = '';
    this.email = '';
  }
}
