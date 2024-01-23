import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

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

  constructor() {}

  ngOnInit(): void {
    this.cartItemsArray = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItems = this.cartItemsArray.length;
  }
}
