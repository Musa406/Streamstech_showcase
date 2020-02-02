import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectsModel } from '../models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class WebAppService {

  urlWebApp = 'https://localhost:44337/api/values';
  constructor(private httpWebApp: HttpClient) { }

  getWebApp(): Observable<ProjectsModel[]> {
    return this.httpWebApp.get<ProjectsModel[]>(this.urlWebApp);
  }
}
