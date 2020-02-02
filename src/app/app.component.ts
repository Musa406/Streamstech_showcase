import { Component } from '@angular/core';
import { BiService } from './services/bi.service';
import { ConsultancyService } from './services/consultancy.service';
import { GisService } from './services/gis.service';
import { MEService } from './services/m-e.service';
import { MobileAppService } from './services/mobile-app.service';
import { TechnologyStackService } from './services/technology-stack.service';
import { WebAppService } from './services/web-app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;
  fullpage_api: any;

  sections: string[] = ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'];

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      // anchors: ['aboutPage', 'gisPage', 'm&ePage', 'webApppage', 'mobilePage', 'biPage', 'consPage', 'techStackPage', 'contactPage'],
      // menu: '#menu',
      navigation: true,
      navigationTooltips: ['About!', 'GIS', 'M&E', 'WEB APP',
       'MOBILE APP', 'BI', 'Consultancy', 'TECHNOLOGY STACK', 'CONTACT'],

      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
        console.log(destination);
        console.log(direction);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
