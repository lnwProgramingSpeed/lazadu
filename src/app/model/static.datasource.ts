import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Shiny Widget', 'Category 1', 'Description for Shiny Widget', 150),
    new Product(2, 'Gizmo Deluxe', 'Category 1', 'Description for Gizmo Deluxe', 200),
    new Product(3, 'Fantastic Gizmo', 'Category 1', 'Description for Fantastic Gizmo', 250),
    new Product(4, 'Super Widget', 'Category 1', 'Description for Super Widget', 300),
    new Product(5, 'Mega Gizmo', 'Category 1', 'Description for Mega Gizmo', 350),
    new Product(6, 'Elegant Gadget', 'Category 2', 'Description for Elegant Gadget', 400),
    new Product(7, 'Precision Widget', 'Category 2', 'Description for Precision Widget', 450),
    new Product(8, 'Innovative Gizmo', 'Category 2', 'Description for Innovative Gizmo', 500),
    new Product(9, 'Glamour Widget', 'Category 2', 'Description for Glamour Widget', 550),
    new Product(10, 'Turbo Gizmo', 'Category 2', 'Description for Turbo Gizmo', 600),
    new Product(11, 'Stylish Gadget', 'Category 3', 'Description for Stylish Gadget', 650),
    new Product(12, 'Premium Widget', 'Category 3', 'Description for Premium Widget', 700),
    new Product(13, 'Masterful Gizmo', 'Category 3', 'Description for Masterful Gizmo', 750),
    new Product(14, 'Ultimate Widget', 'Category 3', 'Description for Ultimate Widget', 800),
    new Product(15, 'Sleek Gadget', 'Category 3', 'Description for Sleek Gadget', 850),
];

  // Reactive Programing Rx
  // Rxjs
  
  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}