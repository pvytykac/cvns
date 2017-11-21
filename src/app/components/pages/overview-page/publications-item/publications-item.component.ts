import {Component, Input, OnInit} from '@angular/core';
import {Publication} from "../../../../data/dto/Publication";
import {MockDataService} from "../../../../data/mock-data.service";

@Component({
  selector: 'app-publications-item',
  templateUrl: './publications-item.component.html',
  styleUrls: ['./publications-item.component.css']
})
export class PublicationsItemComponent implements OnInit {

  private promise: Promise<GroupedByYear[]>;

  constructor(private ds: MockDataService) {
    this.promise = new Promise<GroupedByYear[]>(((resolve, reject) => {
      setTimeout( () => {
        const pubs = this.ds.getPublications();
        const map: Map<number, Publication[]> = new Map();

        pubs.forEach(p => {
          if (map.has(p.year)) {
            map.get(p.year).push(p);
          } else {
            map.set(p.year, [p]);
          }
        });

        console.log(map.entries());
        const array: GroupedByYear[] = [];
        for (let key of Array.from(map.keys())) {
          console.log(key);
          array.push({"year": key, "publications": map.get(key)});
        }

        console.log(array);
        resolve(array);
      }, 1200);
    }));
  }

  ngOnInit() {
  }

  getPublications(): Promise<GroupedByYear[]> {
    return this.promise;
  }
}

export interface GroupedByYear {
  year: number;
  publications: Publication[];
}
