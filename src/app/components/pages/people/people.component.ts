import { Component, OnInit } from '@angular/core';
import {Person} from "../../../data/dto/Person";
import {MockDataService} from "../../../data/mock-data.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  promise: Promise<Person[]>;

  constructor(private ds: MockDataService) {
  }

  ngOnInit() {
    this.promise = new Promise<Person[]>((accept, reject) => {
      setTimeout(() => {
        accept(this.ds.getPeople());
      }, 600);
    });
  }

}
