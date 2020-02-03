import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { AboutModel } from '../models/about.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: AboutModel;
  title = 'ABOUT US';
  // tslint:disable-next-line: max-line-length
  description = 'Streams Tech Ltd. is a software development company providing full-cycle software engineering, custom application development and system integration services. Our business goal is to help our clients meet their software development needs on time and within a budget, while exceeding quality requirements.';
  logo = 'http://showcase.streamstech.com/wp-content/uploads/2020/01/Asset-1-8-e1577878205159.png';

  constructor() { }

  ngOnInit() {
    // this.httpAbout.getAbout()
    // .subscribe(data => this.about = data);
  }

}
