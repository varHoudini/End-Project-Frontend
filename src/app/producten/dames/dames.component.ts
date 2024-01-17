import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dames',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dames.component.html',
  styleUrl: './dames.component.css'
})
export class DamesComponent implements OnInit {
  productsDames: any
  url = 'http://localhost:3000/api/productsd'
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    fetch (this.url)
      .then((response) => response.json())
      .then((data) => {
        this.productsDames = data;
      });
  }
}
