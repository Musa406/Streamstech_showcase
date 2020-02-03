import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  config: any;
  fullpage_api: any;

  sectionApis: string[] = ['values', 'values', 'values', 'values', 'values', 'values'];

  // sectionApis: string[] = ['gis', 'me', 'web-app', 'mobile-app', 'bi', 'consultancy'];

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
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
