import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

////product opstelling database
interface Product {
  id: number;
  name: string;
  image: string;
  brand: string;
  price: number;
  category_id: number;
}

@Component({
  selector: 'app-dames',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dames.component.html',
  styleUrl: './dames.component.css',
})
//oproepen van de producten
//api url gebruiken voor de filter categorie -> word in progress
export class DamesComponent implements OnInit {
  productsDames: any;
  filteredProducts: any;
  url = 'http://localhost:3000/api/productsd';

  constructor(private http: HttpClient) {}

  //oproepen van alle producten bij de categorie dames + filter
  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.productsDames = data;
        this.filteredProducts = data;
      });
  }

  //prijzen filter
  //work in progress - zoek een betere manier
  sortProducts(): void {
    const sortOption = document.getElementById('optie') as HTMLSelectElement;
  }

  //categorie filter
  filterByCategory(categoryId: number): void {
    console.log('Selected Category ID:', categoryId);
    if (categoryId === 0) {
      //Als de categorie 0 of 'show all' is => toon alle producten
      console.log('all products');
      this.filteredProducts = this.productsDames;
    } else {
      // Filter op de geselecteerde categorie
      this.filteredProducts = this.productsDames.filter(
        (product: Product) => product.category_id == categoryId
      );
    }
  }
}
