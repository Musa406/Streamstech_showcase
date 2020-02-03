import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  strApiParent = 'https://localhost:44337/api/';

  urlApiPath: string;
  constructor(private httpME: HttpClient) { }

  getSectionContent(apiPath: any) {
    this.urlApiPath = this.strApiParent + apiPath;
    return this.httpME.get<any>(this.urlApiPath);
  }
}
