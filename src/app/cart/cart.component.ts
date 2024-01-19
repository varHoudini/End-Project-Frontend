import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItem: any;
  removeCartItem(_t5: any) {
    throw new Error('Method not implemented.');
  }
  totalPrice: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    fetch('http://localhost:3000/api/cart')
      .then((response) => response.json())
      .then((data) => {
        this.cartItem = data;
      });
  }
}
