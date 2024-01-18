export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  gender: string;
  stock: number;
  categoryId: number;
  weight: number;
  brand: string;
  soort: string;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    gender: string,
    stock: number,
    categoryId: number,
    weight: number,
    brand: string,
    soort: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.gender = gender;
    this.stock = stock;
    this.categoryId = categoryId;
    this.weight = weight;
    this.brand = brand;
    this.soort = soort;
  }
}
