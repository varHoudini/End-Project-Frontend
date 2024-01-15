import { Component, OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newsletterContents: any;
  url = 'http://localhost:3000/api/newsletter';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    fetch (this.url)
      .then((response) => response.json())
      .then((data) => {
        this.newsletterContents = data;
      });
  }
}
