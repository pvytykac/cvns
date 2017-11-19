import {Component, OnInit} from '@angular/core';
import {MockDataService} from "../../../data/mock-data.service";
import {NavigationService, NavItem} from "../../../service/navigation.service";
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

  getNews(): NavItem {
    return this.ns.getItem("news");
  }

  getAbout(): NavItem {
    return this.ns.getItem("about");
  }

  getPublications(): NavItem {
    return this.ns.getItem("publications");
  }

  getProjects(): NavItem {
    return this.ns.getItem("projects");
  }

  getPeople(): NavItem {
    return this.ns.getItem("people");
  }

}
