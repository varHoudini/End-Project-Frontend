import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service'; 

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
  styleUrls: ['./heren.component.css'],
})
export class HerenComponent implements OnInit {
  productsHeren: Product[] = [];
  filteredProducts: Product[] = [];
  url = 'http://localhost:3000/api/productsh';

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((data: Product[]) => {
        this.productsHeren = data;
        this.filteredProducts = data;
      });
  }

  filterByCategory(categoryId: number): void {
    if (categoryId === 0) {
      this.filteredProducts = this.productsHeren;
    } else {
      this.filteredProducts = this.productsHeren.filter(
        (product: Product) => product.category_id == categoryId
      );
    }
  }

  // Function to handle the "Add to Cart" button click
  addToCart(product: Product): void {
    this.cartService.add(product, 'heren');
  }
}
