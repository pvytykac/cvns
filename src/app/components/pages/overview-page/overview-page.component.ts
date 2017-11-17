import {Component, OnInit} from '@angular/core';
import {MockDataService} from "../../../data/mock-data.service";

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  news = this.dataService.getNews;
  people = this.dataService.getPeople;
  projects = this.dataService.getProjects;
  publications = this.dataService.getPublications;

  constructor(private dataService: MockDataService) {
  }

  ngOnInit() {
  }

}
