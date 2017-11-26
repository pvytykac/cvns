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

  getFormattedName(): string {
    let name = "";

    if (this.person.titlesBefore) {
      name += this.person.titlesBefore + " ";
    }

    name += this.person.firstname + " " + this.person.lastname;

    if (this.person.titlesAfter) {
      name += " " + this.person.titlesAfter;
    }

    return name;
  }

  getPhotoUrl(): string {
    let photo: string;

    if (this.person.photo) {
      photo = this.person.photo;
    } else {
      photo = "http://place-hold.it/300x300";
    }

    return photo;
  }

}
