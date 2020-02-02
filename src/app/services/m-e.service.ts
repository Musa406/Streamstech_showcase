import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MEService {
  urlME = '';
  constructor(private httpME: HttpClient) { }
  getME(){
    return this.httpME.get<any>(this.urlME);
  }
}
