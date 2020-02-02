import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectsModel } from '../models/projects.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MEService {
  urlME = 'https://localhost:44337/api/values';
  constructor(private httpME: HttpClient) { }

  getME(): Observable<ProjectsModel[]> {
    return this.httpME.get<ProjectsModel[]>(this.urlME);
  }
}
