import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(genderFilter?: string): void {
    // If there is a gender filter, add it to the URL
    const apiUrl = genderFilter ? `${this.url}?gender=${genderFilter}` : this.url;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.productskids = data;

        // Manually trigger change detection
        this.cdr.detectChanges();
      });
  }

  // Add this method to filter boys
  filterBoys(): void {
    this.fetchProducts('Kids-B');
  }

  // Add this method to filter girls
  filterGirls(): void {
    this.fetchProducts('Kids-G');
  }
}
