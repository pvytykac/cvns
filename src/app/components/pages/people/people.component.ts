import { Component, OnInit } from '@angular/core';
import {Person} from "../../../data/dto/Person";
import {MockDataService} from "../../../data/mock-data.service";
import {Observable} from "rxjs/Observable";
import {RESTDataService} from "../../../data/rest-data.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  observable: Observable<Person[]>;

  constructor(private api: RESTDataService) {
  }

  ngOnInit() {
    this.observable = this.api.getPeople();
  }

}
