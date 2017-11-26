import { Component, OnInit } from '@angular/core';
import {RESTDataService} from "../../../../data/rest-data.service";
import {Person} from "../../../../data/dto/Person";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-admin-people',
  templateUrl: './admin.people.component.html',
  styleUrls: ['./admin.people.component.css']
})
export class AdminPeopleComponent implements OnInit {

  promise: Observable<Person[]>;

  constructor(private api: RESTDataService) { }

  ngOnInit() {
    this.promise = this.api.getPeople();
  }

}
