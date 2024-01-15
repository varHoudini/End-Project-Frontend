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
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      product_price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      product_image: ['', Validators.required],
      product_gender: ['', Validators.required],
      product_stock: ['', Validators.required],
      product_category: ['', Validators.required],
      product_weight: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      product_brand: ['', Validators.required],
    });
  }

  async addProduct() {
    if (this.productForm.invalid) {
      console.log('Invalid form');
      return;
    }

    try {
      const response = await this.http.post('/admin/add-product', this.productForm.value).toPromise();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
