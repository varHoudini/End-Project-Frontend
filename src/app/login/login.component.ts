import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userAccounts: any;
  url = 'http://localhost:3000/api/users';
  username: string = '';
  first_name: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  login(): void {
    this.errorMessage = ''; // Reset error message

    this.http.post(this.url, { username: this.username, first_name: this.first_name })
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
          if (error.status === 401) {
            this.errorMessage = 'Invalid username or password';
          } else {
            this.errorMessage = 'An error occurred while trying to log in';
          }
        }
      );
  }
}
