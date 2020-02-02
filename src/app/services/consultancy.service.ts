import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectsModel } from '../models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultancyService {

  urlConsultancy = 'https://localhost:44337/api/values';
  constructor(private httpConsultancy: HttpClient) { }

  getConsultancy(): Observable<ProjectsModel[]> {
    return this.httpConsultancy.get<ProjectsModel[]>(this.urlConsultancy);
  }
}
