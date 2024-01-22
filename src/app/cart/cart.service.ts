import { Injectable } from '@angular/core';
import { product } from './cart.model';

@Injectable({
 providedIn: 'root'
})
export class CartService {
 private products: Map<string, product[]> = new Map<string, product[]>();

 add(product: product, category: string) {
    if (!this.products.has(category)) {
      this.products.set(category, []);
    }
    this.products.get(category)?.push(product);
 }

 getProducts(category: string): product[] {
    return this.products.get(category) || [];
 }
}
