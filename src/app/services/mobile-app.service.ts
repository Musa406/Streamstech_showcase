import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileAppService {

  urlMobileApp = '';
  constructor(private httpMobileApp: HttpClient) { }

  getMobileApp(){
    return this.httpMobileApp.get<any>(this.urlMobileApp);
  }
}
