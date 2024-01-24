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
    this.UserService.register(this.username, this.password, this.email);
    this.toastr.success('You have registered', 'Yay');

    // clear the fields;
    this.username = '';
    this.password = '';
    this.email = '';
  }
}
