import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  productToEdit: any;
  showEditForm = false;
  productID: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.productToEdit = {
      title: "",
      price: null,
      imgUrl: ""
    }
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params['id']);
      this.productID = params['id'];
      this.showOneProduct(this.productID);
    });
  }

  editAProduct(productToEdit){
    let observable = this._httpService.editProduct(productToEdit);
    observable.subscribe(data=>{
      this._router.navigate(['/products']);
    })
  }

  showOneProduct(id){
    let observable = this._httpService.getOneProduct(this.productID);
    observable.subscribe(data=>{
      this.productToEdit = data['productsData'];
    })
  }

  deleteAProduct(id){
    let observable = this._httpService.deleteProduct(this.productID);
    observable.subscribe(data=>{
      this._router.navigate(['/products']);
    })
  }
}
