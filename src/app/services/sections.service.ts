import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  strApiParent = 'https://localhost:44337/api/section/';
  urlApiPath: string;
  constructor(private httpME: HttpClient) { }

  getTechnologyStackData() {
    return this.httpME.get('../assets/tech.json');
  }
  postContactData(contactData: any) {
    return this.httpME.post(this.strApiParent+'tech', contactData);
  }



  getSectionContent(apiPath: any) {
    // this.urlApiPath = this.strApiParent + apiPath;
    return this.httpME.get<any>('../assets/items.json');
  }
}
