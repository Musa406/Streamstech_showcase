import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologyStackService {

  urlTechnologyStack = '';
  constructor(private httpTechnoloyStack: HttpClient) { }

  getTechnologyStack(){
    return this.httpTechnoloyStack.get<any>(this.urlTechnologyStack);
  }
}
