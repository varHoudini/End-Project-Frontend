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
  username_id!: string;
  password_hash!: string;
  constructor(
    private UserService: UserService,
    private toastr: ToastrService
  ) {}

  // Let's go wild and write some async sh!t
  async onSubmit() {
    const token = await this.UserService.login(this.username_id, this.password_hash);
    if (token) {
      // Store token in local storage
      localStorage.setItem('token', token);
      this.toastr.success(
        'You now have access to the protected component',
        'Yay'
      );
      window.location.href = '/home';
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
