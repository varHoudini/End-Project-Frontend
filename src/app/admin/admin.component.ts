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
      //default value voor product_brand is "MC"
      product_brand: ['MC', Validators.required],
    });
  }

  async addProduct() {
    console.log('Form submitted');

    if (this.productForm.invalid) {
      console.log('Invalid form');
      return;
    }

    try {
      //alert met product name & toegevoegd
      alert(`Product ${this.productForm.value.product_name} has been added`);

      //form values - controle
      console.log('Form values:', this.productForm.value);

      //leeghalen
      this.productForm.reset();
    } catch (error) {
      console.error(error);
    }
  }
}
