import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebAppService {

  urlWebApp = '';
  constructor(private httpWebApp: HttpClient) { }
  
  getWebApp(){
    return this.httpWebApp.get<any>(this.urlWebApp);
  }
}
