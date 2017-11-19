import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../../data/dto/Project";
import {MockDataService} from "../../../../data/mock-data.service";

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.css']
})
export class ProjectsItemComponent implements OnInit {

  constructor(private ds: MockDataService) { }

  ngOnInit() {
  }

  getProjects(): Project[] {
    return this.ds.getProjects();
  }

}
