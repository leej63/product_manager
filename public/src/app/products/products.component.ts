import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts = [];

  constructor(private _httpService: HttpService) {
    this.getProducts();
  }

  ngOnInit() {

  }
  
  getProducts(){
    let observable = this._httpService.getAllProducts();
    observable.subscribe(data=>{
      this.allProducts = data['productsData']
      console.log('Got our data!', data)
    })
  }

  deleteAProduct(id){
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data=>{
      this.getProducts();
    })
  }

}
