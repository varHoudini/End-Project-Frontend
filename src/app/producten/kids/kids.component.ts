import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { product } from '../../cart/cart.model';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css',
})

//oproepen van de producten
//api url gebruiken voor de filter categorie -> word in progress
export class KidsComponent implements OnInit {
  productsKids: any;
  filteredProducts: any;
  url = 'http://localhost:3000/api/productsk';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  //oproepen van alle producten bij de categorie kids + filter
  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.productsKids = data;
        this.filteredProducts = data;
      });
  }

  //prijzen filter
  sortProducts(): void {
    const sortOption = document.getElementById('optie') as HTMLSelectElement;
    const sortBy = sortOption.value;

    if (sortBy === 'high') {
      // Sorteert 'filteredProducts' => producten zijn prijs in descending orde (groot naar klein)
      this.filteredProducts = this.filteredProducts.sort(
        (a: product, b: product) => b.price - a.price
      );
    } else if (sortBy === 'low') {
      // Sorteert 'filteredProducts' => producten zijn prijs in ascending orde (klein naar groot)
      this.filteredProducts = this.filteredProducts.sort(
        (a: product, b: product) => a.price - b.price
      );
    }
  }

  //categorie filter
  filterByCategory(categoryId: number): void {
    console.log('Selected Category ID:', categoryId);
    if (categoryId === 0) {
      //Als de categorie 0 of 'show all' is => toon alle producten
      console.log('all products');
      this.filteredProducts = this.productsKids;
    } else {
      // Filter op de geselecteerde categorie
      this.filteredProducts = this.productsKids.filter(
        (product: product) => product.category_id == categoryId
      );
    }
  }

  //product toevoegen aan winkelwagen
  addToCart(product: product): void {
    console.log('Product added to cart:', product);

    //krijg de product van localstorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Cart items:', cartItems);
  }
}
