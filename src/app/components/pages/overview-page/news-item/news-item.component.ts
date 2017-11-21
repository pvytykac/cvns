import {Component, ElementRef, Input, OnInit, Renderer} from '@angular/core';
import {News} from "../../../../data/dto/News";
import {MockDataService} from "../../../../data/mock-data.service";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  private promise: Promise<News[]>;
  done = false;

  constructor(private ds: MockDataService) {
    this.promise = new Promise(((resolve, reject) => {
      setTimeout( () => {
        resolve(this.ds.getNews());
        this.done = true;
      }, 600);
    }));

  }

  ngOnInit() {
  }

  getNews(): Promise<News[]> {
    return this.promise;
  }

}
