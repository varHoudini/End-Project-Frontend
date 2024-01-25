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

//oproepen van de producten & filter
export class HerenComponent implements OnInit {
  productsHeren: any;
  filteredProducts: any;
  url = 'http://localhost:3000/api/productsh';

  constructor(private http: HttpClient, private cartService: CartService) {}

  async ngOnInit(): Promise<void> {
    await this.fetchProducts();
  }

  async fetchProducts(): Promise<void> {
    try {
      const data: product[] | undefined = await this.http
        .get<product[]>(this.url)
        .toPromise();
      // Initialize with an empty array if data is undefined
      this.productsHeren = data || [];
      this.filteredProducts = this.productsHeren.map((product: any) => ({
        ...product,
        sizes: this.getSizeOptions(product.category_id),
        showSizes: false,
        selectedSize: '', // Toegevoegd om de geselecteerde maat bij te houden
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle the error (e.g., display a message to the user)
    }
    this.filterByCategory;
    this.getSizeOptions;
  }

  //prijzen filter
  ngonit(): void {}
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
    if (categoryId === 0) {
      //Als de categorie 0 of 'show all' is => toon alle producten
      this.filteredProducts = this.productsHeren;
    } else {
      // Filter op de geselecteerde categorie
      this.filteredProducts = this.productsHeren.filter(
        (product: product) => product.category_id == categoryId
      );
      //zodat het toont bij de main pagina en bij de filter keuzes
      this.filteredProducts.forEach((product: any) => {
        product.showSizes = true;
      });
    }
  }

  //verschillende maten afhangend van category_id
  getSizeOptions(categoryId: number): string[] {
    if (categoryId === 1) {
      return ['38', '39', '40', '41', '42', '43'];
    }
    if (categoryId === 5) {
      return ['one size'];
    } else {
      return ['XS', 'S', 'M', 'L', 'XL'];
    }
  }

  //toggle voor tonen van maten
  toggleSizeDisplay(product: any, show: boolean): void {
    product.showSizes = show;
  }

  //product toevoegen aan winkelwagen
  addToCart(product: product, size: string): void {
    if (size) {
      //console.log('Product added to cart:', product);

      //krijg de product van localstorage
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      cartItems.push({ ...product, size: size });
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      ///console.log('Cart items:', cartItems);
    } else {
      console.error('Please select a size before adding to cart.');
    }
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
