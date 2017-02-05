import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-image',
  inputs: ['product'],
  host: {class: 'ui small image'},
  template:`
  <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
