import {Component, Input, OnInit} from '@angular/core';
import {News} from "../../../data/dto/News";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() item: News;

  constructor() { }

  ngOnInit() {
  }

}
