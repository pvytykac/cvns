import {Injectable} from '@angular/core';
import {News} from "./dto/News";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/publishReplay";

@Injectable()
export class RESTDataService {

  private cachedNews: Observable<News[]> = this.http.get("/data/news.json")
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    .publishReplay(1)
    .refCount();

  constructor(private http: Http) {
  }

  getNews(): Observable<News[]> {
    return this.cachedNews;
  }

}
