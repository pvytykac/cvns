import {Component, OnInit} from '@angular/core';
import {Person} from "../../../../data/dto/Person";
import {MockDataService} from "../../../../data/mock-data.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {RESTDataService} from "../../../../data/rest-data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {

  observable: Observable<Person[]>;

  constructor(private api: RESTDataService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.observable = this.api.getPeople();
  }

  getPhotoUrl(person: Person): SafeResourceUrl {
    let photo: string;

    if (person.photo) {
      photo = person.photo;
    } else {
      photo = "http://place-hold.it/50x50";
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(photo);
  }

}
