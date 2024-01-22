import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


//product opstelling database - product
interface Product {
  id: number;
  name: string;
  image: string;
  brand: string;
  price: number;
  category_id: number;
}

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
      (product: Product) => product.category_id == categoryId
    );
  }
}

}
