import {Injectable} from '@angular/core';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/publishReplay";
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Person} from "./dto/Person";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RESTDataService {

  private static HOST = "http://localhost:8080";
  private static HEADERS = new Headers({
    "Content-Type": "application/json"
  });

  constructor (private http: Http) {}

  getPeople(): Observable<Person[]> {
    return this.http.get(RESTDataService.HOST + "/person")
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  savePerson(person: CreatePerson): void {
    console.log("saving person: " + JSON.stringify(person));
    this.http.post(RESTDataService.HOST + "/person", person, {
      headers: RESTDataService.HEADERS
    }).subscribe(resp => console.log(resp));
  }
}

export interface CreatePerson {
  firstname?: string;
  lastname?: string;
  email?: string;
  titlesBefore?: string;
  titlesAfter?: string;

}
