import { Component } from '@angular/core';
import { Iproduct } from '../interfaces/products';
import { ProductService } from '../services/product.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['',[Validators.required,Validators.minLength(4)]],
    price: [0]
  })
  constructor(private formBuilder: FormBuilder,
  private productService: ProductService ){}
  onHandleSubmit(){
  const product: Iproduct= {
    name: this.productForm.value.name || "",
    price: this.productForm.value.price || 0,
  }
  this.productService.addProduct(product).subscribe((product)=>{
    console.log(product)
  })
  }
}
