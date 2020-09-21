import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdModel } from './ProdModel';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  productFind(){
    return this.http.get<ProdModel[]>(this.url + 'api/find');
  }
  resetdb(){
    return this.http.get<ProdModel[]>(this.url + 'api/resetdb');
  }
  prodDelete(id){
    return this.http.post<any>(this.url + 'api/delete', id);
  }
  addProd(prod){
    return this.http.post<any>(this.url + 'api/addProd', prod);
  }
  validate(prod){
    return this.http.post<any>(this.url + 'api/validate', prod);
  }
  editProd(prod){
    return this.http.post<any>(this.url + 'api/editProd', prod);
  }
  getOne(id){
    return this.http.post<any>(this.url + 'api/getOne', id);
  }
}
