import { Component } from '@angular/core';
import { Iproduct } from '../interfaces/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products! : Iproduct[]

  constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    })
  }
  onhandleRemove(id:number){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter(product=>product.id !== id)
    })
  }
}
