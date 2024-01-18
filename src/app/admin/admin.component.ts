// admin.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from './product.module';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      product_price: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      product_image: ['', Validators.required],
      product_gender: ['', Validators.required],
      product_stock: ['', Validators.required],
      product_category: ['', Validators.required],
      product_weight: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      //default value voor product_brand is "MC"
      product_brand: ['MC', Validators.required],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.productForm.get(controlName)!;
    return (
      !!control &&
      (control.invalid ||
        ((control.dirty || control.touched) && !control.valid))
    );
  }

  async addProduct() {
    Object.values(this.productForm.controls).forEach((control) => {
      control.markAsTouched();
    });

    if (this.productForm.invalid) {
      console.log('Invalid form');
      return;
    }

    try {
      //alert met product name & toegevoegd
      alert(`Product ${this.productForm.value.product_name} has been added`);

      //form values - controle
      console.log('Form submitted');
      console.log('Form values:', this.productForm.value);

      //de product data voorbereiden
      const productData = this.productForm.value;

      //product data omvormen naar JSON
      const productJson = JSON.stringify(productData);

      //creert een HTTP POST request
      const response = await this.http.post<Product>(
        'http://localhost:3000/api/products',
        productData
      ).toPromise;

      console.log('Backend Response:', response);

      if (response) {
        console.log('Product added successfully:', response);
        alert(
          `Product ${productData.product_name} has been added successfully`
        );
        this.productForm.reset();
      } else {
        console.error('Failed to add product:');
      }

      //leeghalen
      this.productForm.reset();
    } catch (error) {
      console.error(error);
    }
  }
}
