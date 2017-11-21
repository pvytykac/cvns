import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../../data/dto/Project";
import {MockDataService} from "../../../../data/mock-data.service";

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.css']
})
export class ProjectsItemComponent implements OnInit {

  private promise: Promise<Project[]>;

  constructor(private ds: MockDataService) {
    this.promise = new Promise<Project[]>(((resolve, reject) => {
      setTimeout( () => {
        resolve(this.ds.getProjects());
      }, 700);
    }));
  }

  ngOnInit() {
  }

  getProjects(): Promise<Project[]> {
    return this.promise;
  }

}
