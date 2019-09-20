import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  newProduct: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { 
    this.newProduct = {
      title: "",
      price: null,
      imgUrl: ""
    };
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
  }

  createAProduct(){
    let observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe(data=>{
      console.log(data);
      this.newProduct = {title: "", price: null, imgUrl: ""};
      this._router.navigate(['/products']);
    })
  }

}
