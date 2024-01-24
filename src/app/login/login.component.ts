import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username!: string;
  password!: string;
  constructor(
    private UserService: UserService,
    private toastr: ToastrService
  ) {}

  // Let's go wild and write some async sh!t
  async onSubmit() {
    const token = await this.UserService.login(this.username, this.password);
    if (token) {
      // Store token in local storage
      localStorage.setItem('token', token);
      this.toastr.success(
        'You now have access to the protected component',
        'Yay'
      );
      // Redirect to protected component
      // ...
    } else {
      this.toastr.error('Wrong credentials', 'Not Yay');
    }
  }

  // logout method
  logout() {
    localStorage.removeItem('token');
    this.toastr.warning('Logged out successfully', 'Logout');
  }
}
