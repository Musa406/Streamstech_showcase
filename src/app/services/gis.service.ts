import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GisService {
  urlGIS = '';
  constructor(private httpGIS: HttpClient) { }
  getGIS(){
    return this.httpGIS.get<any>(this.urlGIS);
  }
}
