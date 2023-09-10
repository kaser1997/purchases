import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProducatsService { 

  constructor(private http:HttpClient) {}

    getAllProducts() {
      return this.http.get('https://fakestoreapi.com/products')
    }

    getAllCategories() {
      return this.http.get('https://fakestoreapi.com/products/categories')
    }
   }

  