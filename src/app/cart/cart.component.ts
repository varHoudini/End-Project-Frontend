import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { product } from './cart.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], 
})
export class CartComponent implements OnInit {
  // Assuming you have separate arrays for men, women, and kids
  menCartItems: product[] = [];
  womenCartItems: product[] = [];
  kidsCartItems: product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Load initial cart items
    this.menCartItems = this.cartService.getProducts('Heren');
    this.womenCartItems = this.cartService.getProducts('Dames');
    this.kidsCartItems = this.cartService.getProducts('Kids');
  }

  // Function to handle the "Add to Cart" button click for men's productss
  addToCartMen(products: product) {
    this.cartService.add(products, 'Heren');
    this.menCartItems = this.cartService.getProducts('Heren');
  }

  // Function to handle the "Add to Cart" button click for women's productss
  addToCartWomen(products: product) {
    this.cartService.add(products, 'Dames');
    this.womenCartItems = this.cartService.getProducts('Dames');
  }

  // Function to handle the "Add to Cart" button click for kids' productss
  addToCartKids(products: product) {
    this.cartService.add(products, 'Kids');
    this.kidsCartItems = this.cartService.getProducts('Kids');
  }
}
