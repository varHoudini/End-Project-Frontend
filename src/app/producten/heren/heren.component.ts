import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//product opstelling database
interface Product {
  id: number;
  name: string;
  image: string;
  brand: string;
  price: number;
  category_id: number;
}

@Component({
  selector: 'app-heren',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './heren.component.html',
  styleUrl: './heren.component.css',
})
export class HerenComponent implements OnInit {
  productsHeren: any;
  filteredProducts: any;
  url = 'http://localhost:3000/api/productsh';

  constructor(private http: HttpClient) {}

  //oproepen van alle producten bij de categorie heren + filter
  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.productsHeren = data;
        this.filteredProducts = data;
      });
  }

  //categorie filter
  filterByCategory(categoryId: number): void {
    console.log('Selected Category ID:', categoryId);
    if (categoryId === 0) {
      //Als de categorie 0 of 'show all' is => toon alle producten
      console.log('all products');
      this.filteredProducts = this.productsHeren;
    } else {
      // Filter op de geselecteerde categorie
      this.filteredProducts = this.productsHeren.filter(
        (product: Product) => product.category_id == categoryId
      );
    }
  }
}
