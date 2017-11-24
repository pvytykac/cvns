import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../../../data/dto/Person";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() person: Person;

  constructor() {
  }

  ngOnInit() {
    console.log(this.person);
  }

  getFormattedName(): String {
    return this.person.titlesBefore + " " + this.person.firstname + " " + this.person.lastname + " " + this.person.titlesAfter;
  }

}
