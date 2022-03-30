import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  title = 'Ürün Listesi';
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageUrl: 'https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043',
    },
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageUrl: 'https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043',
    },

    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageUrl: 'https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043',
    },
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageUrl: 'https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043',
    },
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageUrl: 'https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043',
    },

    
  ];
  ngOnInit(): void {}
}
