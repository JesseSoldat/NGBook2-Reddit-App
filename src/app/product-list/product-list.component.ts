import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'product-list',
 	outputs: ['onProductSelected'],
  template: `
  <div *ngFor="let myProduct of productList">
  	{{myProduct.name}}
  	<button (click)="clicked(myProduct.name)">Click Me</button>
  </div>
  `
})
export class ProductListComponent implements OnInit {

	@Input() productList: Product[];

	onProductSelected: EventEmitter<Product>

  constructor() { 
  	this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product){
  	this.onProductSelected.emit(product);
  }

}
