// admin.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      product_brand: ['', Validators.required],
    });
  }

  async addProduct() {
    console.log('Inside addProduct method');
    if (this.productForm.invalid) {
      console.log('Invalid form');
      return;
    }

    try {
      // Display an alert with the product name
      alert(`Product ${this.productForm.value.product_name} has been added`);

      // Log the form values
      console.log('Form values:', this.productForm.value);

      // Clear the form after successful submission
      this.productForm.reset();
    } catch (error) {
      console.error(error);
    }
  }
}
