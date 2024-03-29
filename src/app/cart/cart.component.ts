import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { product } from './cart.model';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  cartitems: product[] = [];
  ngOnInit(): void {
    this.cartitems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  //  function to remove items in cart
  removeItem(product: product) {
    const index = this.cartitems.indexOf(product);
    if (index > -1) {
      this.cartitems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartitems));
      // reload page when product is removed
      window.location.reload();
      this.toastr.success('Product removed from cart', 'Success');
    }
  }

  //  function for total price
  totalPrice() {
    return this.cartitems.reduce((total, item) => total + item.price, 0);
  }

  // Function to handle the "Add to Cart" button click for men's productss
  addToCartMen(products: product) {
    this.cartService.add(products, 'Heren');
    this.toastr.success('Product added to cart', 'Success');
    // this.menCartItems = this.cartService.getProducts('Heren');
  }

  // Function to handle the "Add to Cart" button click for women's productss
  addToCartWomen(products: product) {
    this.cartService.add(products, 'Dames');
    this.toastr.success('Product added to cart', 'Success');
    //this.womenCartItems = this.cartService.getProducts('Dames');
  }

  // Function to handle the "Add to Cart" button click for kids' productss
  addToCartKids(products: product) {
    this.cartService.add(products, 'Kids');
    //this.kidsCartItems = this.cartService.getProducts('Kids');
    this.toastr.success('Product added to cart', 'Success');
  }

  quantityTotal() {
    return this.cartitems.reduce((total, item) => total + item.quantity, 0);
  }

  // functie om een popup melding te geven en cart leeg te maken en als die leeg is, ook een melding.
  checkOut() {
    if (this.cartitems.length === 0) {
      this.toastr.error('Your cart is empty', 'Error');
      return;
    } else {
      this.toastr.success('Your order has been placed', 'Success');
      localStorage.removeItem('cartItems');
      this.cartitems = [];
      return;
    }
  }
}
