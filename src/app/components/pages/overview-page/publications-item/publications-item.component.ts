import {Component, Input, OnInit} from '@angular/core';
import {Publication} from "../../../../data/dto/Publication";
import {MockDataService} from "../../../../data/mock-data.service";

@Component({
  selector: 'app-publications-item',
  templateUrl: './publications-item.component.html',
  styleUrls: ['./publications-item.component.css']
})
export class PublicationsItemComponent implements OnInit {

  constructor(private ds: MockDataService) {}

  ngOnInit() {
  }

  getPublications(): Publication[] {
    return this.ds.getPublications();
  }
}
