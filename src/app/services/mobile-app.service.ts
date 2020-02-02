import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectsModel } from '../models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class MobileAppService {

  urlMobileApp = 'https://localhost:44337/api/values';
  constructor(private httpMobileApp: HttpClient) { }


  getMobileApp(): Observable<ProjectsModel[]> {
    return this.httpMobileApp.get<ProjectsModel[]>(this.urlMobileApp);
  }
}
