import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css',
})
export class KidsComponent implements OnInit {
  productskids: any;
  url = 'http://localhost:3000/api/productsk';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.productskids = data;
      });
  }
}
