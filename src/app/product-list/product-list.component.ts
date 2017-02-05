import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'product-list',
  inputs: ['productList'],
 	outputs: ['onProductSelected'],
  template: `
  <div class="ui items">
	  <product-row
	  	*ngFor="let myProduct of productList"
	  	[product]="myProduct"
	  	(click)="clicked(myProduct)"
	  	[class.selected]="isSelected(myProduct)">
	  </product-row>
  </div>
  `
})
export class ProductListComponent implements OnInit {
	// @input
	productList: Product[];
	// @output
	onProductSelected: EventEmitter<Product>
	// local state
	private currentProduct: Product;

  constructor() { 
  	this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product){
  	this.currentProduct = product;
  	
  	this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
  	if(!product || !this.currentProduct){
  		return false;
  	}
  	return product.sku === this.currentProduct.sku;
  }

}
