import {Component, OnInit} from '@angular/core';
import {MockDataService} from "../../../data/mock-data.service";
import {NavigationService} from "../../../service/navigation.service";
import {News} from "../../../data/dto/News";

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  news = this.dataService.getNews();
  people = this.dataService.getPeople();
  projects = this.dataService.getProjects();
  publications = this.dataService.getPublications();

  constructor(private dataService: MockDataService, private ns: NavigationService) {
  }

  ngOnInit() {
  }

  getNewsColor(): string {
    return this.ns.getColor("news");
  }

  getAboutColor(): string {
    return this.ns.getColor("about");
  }

  getPublicationsColor(): string {
    return this.ns.getColor("publications");
  }

  getProjectsColor(): string {
    return this.ns.getColor("projects");
  }

  getPeopleColor(): string {
    return this.ns.getColor("people");
  }

}
