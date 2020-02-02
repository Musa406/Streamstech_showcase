import { Component, OnInit , Input} from '@angular/core';
import { ProjectsModel } from '../models/projects.model';

import { BiService } from '../services/bi.service';
import { ConsultancyService } from '../services/consultancy.service';
import { GisService } from '../services/gis.service';
import { MEService } from '../services/m-e.service';
import { MobileAppService } from '../services/mobile-app.service';
import { WebAppService } from '../services/web-app.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  itemService: ProjectsModel[] = [];
  // me: ProjectsModel[] = [];
  // webApp: ProjectsModel[] = [];
  // mobileApp: ProjectsModel[] = [];
  // bi: ProjectsModel[] = [];
  // consultancy: ProjectsModel[] = [];
   @Input() sectionItem: string;

  constructor(
    private httpGis: GisService,
    private httpME: MEService,
    private httpWebApp: WebAppService,
    private httMobileApp: MobileAppService,
    private httpBI: BiService,
    private httpConsultancy: ConsultancyService
  ) { }

  ngOnInit() {


    if (this.sectionItem === 'gis') {
      this.httpGis.getGIS()
      .subscribe(data1 => this.itemService = data1);

    } else if (this.sectionItem === 'me') {
      this.httpME.getME()
      .subscribe(data2 => this.itemService = data2);

    } else if (this.sectionItem === 'web-app') {
      this.httpWebApp.getWebApp()
      .subscribe(data3 => this.itemService = data3);

    } else if (this.sectionItem === 'mobile') {
      this.httMobileApp.getMobileApp()
      .subscribe(data4 => this.itemService = data4);

    } else if (this.sectionItem === 'bi') {
      this.httpBI.getBi()
      .subscribe(data5 => this.itemService = data5);

    } else{
      this.httpConsultancy.getConsultancy()
      .subscribe(data6 => this.itemService = data6);

    }

  }

}
