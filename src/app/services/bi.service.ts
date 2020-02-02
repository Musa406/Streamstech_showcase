import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectsModel } from '../models/projects.model';
@Injectable({
  providedIn: 'root'
})
export class BiService {

  urlBI = 'https://localhost:44337/api/values';
  constructor(private httpBI: HttpClient) {
   }
   getBi(): Observable<ProjectsModel[]> {
     return this.httpBI.get<ProjectsModel[]>(this.urlBI);
   }
 
}
