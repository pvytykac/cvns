import {Component, OnInit} from '@angular/core';
import {Person} from "../../../../data/dto/Person";
import {MockDataService} from "../../../../data/mock-data.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {

  private promise: Promise<Person[]>;

  constructor(private ds: MockDataService, private sanitizer: DomSanitizer) {
    this.promise = new Promise<Person[]>(((resolve, reject) => {
      setTimeout( () => {
        resolve(this.ds.getPeople().map(person => {
          person.photo = person.photo.replace("300x300", "50x50");
          return person;
        }));
      }, 400);
    }));
  }

  ngOnInit() {
  }

  getPeople(): Promise<Person[]> {
    return this.promise;
  }

  sanitizePhotoUrl(person: Person): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(person.photo + "&version=" + person.id);
  }

}
