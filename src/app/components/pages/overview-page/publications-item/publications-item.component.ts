import {Component, Input, OnInit} from '@angular/core';
import {Publication} from "../../../../data/dto/Publication";
import {MockDataService} from "../../../../data/mock-data.service";

@Component({
  selector: 'app-publications-item',
  templateUrl: './publications-item.component.html',
  styleUrls: ['./publications-item.component.css']
})
export class PublicationsItemComponent implements OnInit {

  private promise: Promise<Map<number, Publication[]>>;

  constructor(private ds: MockDataService) {
    this.promise = new Promise<Map<number, Publication[]>>(((resolve, reject) => {
      setTimeout( () => {
        const map: Map<number, Publication[]> = new Map();
        this.ds.getPublications().forEach(p => {
          if (map[p.year]) {
            map[p.year].push(p);
          } else {
            map[p.year] = [p];
          }
        });

        resolve(map);
      }, 1200);
    }));
  }

  ngOnInit() {
  }

  getPublications(): Promise<Map<number, Publication[]>> {
    return this.promise;
  }
}
