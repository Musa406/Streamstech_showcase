import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.scss']
})
export class TechnologyStackComponent implements OnInit {

  techStackData: any;
  constructor(private service: SectionsService) { }

  ngOnInit() {
    this.service.getTechnologyStackData().
    subscribe(data=>this.techStackData=data);
  }
}
