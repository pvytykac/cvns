import {Component, Input, OnInit, Sanitizer, SecurityContext} from '@angular/core';
import {Person} from "../../../../data/dto/Person";
import {MockDataService} from "../../../../data/mock-data.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {

  constructor(private ds: MockDataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getPeople(): Person[] {
    return this.ds.getPeople();
  }

  sanitizePhotoUrl(person: Person): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(person.photo + "&version=" + person.id);
  }

}
