import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heren',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './heren.component.html',
  styleUrl: './heren.component.css'
})
export class HerenComponent implements OnInit {
  productsHeren: any
  url = 'http://localhost:3000/api/productsh'
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    fetch (this.url)
      .then((response) => response.json())
      .then((data) => {
        this.productsHeren = data;
      });
  }
}
