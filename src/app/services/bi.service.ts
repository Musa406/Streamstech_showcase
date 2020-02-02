import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BiService {

  urlBI = '';
  constructor(private httpBI:HttpClient) {
   }
   getBiItem(){
     return this.httpBI.get(this.urlBI);
   }
}
