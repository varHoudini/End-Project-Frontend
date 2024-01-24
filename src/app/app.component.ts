import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { observeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'endproject';
  favicon: string = 'assets/favicon.ico';

  cartItems: number = 0;
  cartItemsArray: any;
  cartItemssupscribe: any;

  constructor() {}
  ngOninit(): void {
    if (this.cartItemssupscribe) {
      this.cartItemssupscribe.subscribe();
    }
  }
  ngOnInit(): void {
    this.cartItemsArray = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItems = this.cartItemsArray.length;
  }
}
