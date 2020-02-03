import { Component, OnInit , Input} from '@angular/core';
import { SectionItemModel } from '../models/section.model';
import { SectionsService } from '../services/sections.service';


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  @Input() sectionApi: string;

  sectionTitle = 'Title';
  sectionDescription = 'Streams Tech Ltd. has profound expertise in developing e-commerce solutions, CMS solutions, ERP solutions, dashboards and reporting tools and any kind of custom web solutions.';
  itemsInSection: SectionItemModel[] = [];

  constructor( private httpSections: SectionsService ) { }

  ngOnInit() {
      this.httpSections.getSectionContent('value')
    .subscribe(data => this.itemsInSection = data);
  }

}
