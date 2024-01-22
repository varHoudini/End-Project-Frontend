import { Injectable } from '@angular/core';
import { product } from './cart.model';

@Injectable({
 providedIn: 'root'
})
export class CartService {
 private products: Map<string, product[]> = new Map<string, product[]>();

 cartitems: product[] = [];
 add(product: product, category: string) {
    if (!this.products.has(category)) {
      this.products.set(category, []);
    }
    this.products.get(category)?.push(product);
 }


  ngOnInit(): void {
   this.cartitems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

}
