import { Component, OnInit } from '@angular/core';
import {CreatePerson, RESTDataService} from "../../../../../../data/rest-data.service";

@Component({
  selector: 'app-admin-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: CreatePerson = {};

  constructor(private api: RESTDataService) { }

  ngOnInit() {
  }

  savePerson(): void {
    this.api.savePerson(this.person);
  }

}
