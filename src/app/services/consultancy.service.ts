import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultancyService {

  urlConsultancy = '';
  constructor(private httpConsultancy: HttpClient) { }
  getConsultancy(){
    return this.httpConsultancy.get<any>(this.urlConsultancy);
  }
}
