import {Injectable} from '@angular/core';
import {News} from "./dto/News";
import {Person} from "./dto/Person";
import {Publication} from "./dto/Publication";
import {Project} from "./dto/Project";
import {Info} from "./dto/Info";

declare const require: any;

const info: Info = require("../../data/info.json");
const news: News[] = require("../../data/news.json");
const people: Person[] = require("../../data/people.json");
const projects: Project[] = require("../../data/projects.json");
const publications: Publication[] = require("../../data/publications.json");


@Injectable()
export class MockDataService {

  constructor() {
  }

  getInfo(): Info {
    return info;
  }

  getNews(): News[] {
    return news;
  }

  getPeople(): Person[] {
    return people;
  }

  getProjects(): Project[] {
    return projects;
  }

  getPublications(): Publication[] {
    return publications;
  }

}
