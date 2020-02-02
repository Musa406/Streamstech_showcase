import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectsModel } from '../models/projects.model';
@Injectable({
  providedIn: 'root'
})
export class GisService {
  urlGIS = 'https://localhost:44337/api/values';
  constructor(private httpGIS: HttpClient) { }

  getGIS(): Observable<ProjectsModel[]> {
    return this.httpGIS.get<ProjectsModel[]>(this.urlGIS);
  }
}
