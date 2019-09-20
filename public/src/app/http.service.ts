import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getAllProducts(){
    return this._http.get('/api/products');
  }

  createProduct(newProduct){
    return this._http.post('/api/products', newProduct);
  }

  getOneProduct(id){
    return this._http.get('/api/products/' + id);
  }

  editProduct(updateProduct){
    return this._http.put('/api/products/' + updateProduct._id, updateProduct);
  }

  deleteProduct(id){
    return this._http.delete('/api/products/' + id)
  }

  constructor(private _http: HttpClient) { 
    
  }
}
