import {Component, Input, OnInit} from '@angular/core';
import {Publication} from "../dto/Publication";

@Component({
  selector: 'app-publications-item',
  templateUrl: './publications-item.component.html',
  styleUrls: ['./publications-item.component.css']
})
export class PublicationsItemComponent implements OnInit {

  @Input() publication: Publication;

  constructor() {}

  ngOnInit() {
  }

}
