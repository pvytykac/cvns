import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../../data/dto/Person";

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
