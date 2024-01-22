// heren.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service'; 
import { product } from '../../cart/cart.model';

@Component({
  selector: 'app-heren',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './heren.component.html',
  styleUrls: ['./heren.component.css'],
})
export class HerenComponent implements OnInit {
  productsHeren: product[] = [];
  filteredProducts: product[] = [];
  url = 'http://localhost:3000/api/productsh';

  constructor(private http: HttpClient, private cartService: CartService) {}

  async ngOnInit(): Promise<void> {
    await this.fetchProducts();
  }

  async fetchProducts(): Promise<void> {
    try {
      const data: product[] | undefined = await this.http.get<product[]>(this.url).toPromise();
      // Initialize with an empty array if data is undefined
      this.productsHeren = data || [];
      this.filteredProducts = this.productsHeren;
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle the error (e.g., display a message to the user)
    }
  }

  filterByCategory(categoryId: number): void {
    if (categoryId === 0) {
      this.filteredProducts = this.productsHeren;
    } else {
      this.filteredProducts = this.productsHeren.filter(
        (product: product) => product.category_id == categoryId
      );
    }
  }

  // Function to handle the "Add to Cart" button click
  addToCart(product: product): void {
    console.log('Product added to cart:', product);

    // retrieve localstorage products
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Cart items:', cartItems);

  }
}
