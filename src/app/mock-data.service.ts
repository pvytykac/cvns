import {Injectable} from '@angular/core';
import {News} from "./dto/News";
import {Person} from "./dto/Person";
import {Publication} from "./dto/Publication";
import {Project} from "./dto/Project";

const news: News[] = require("../data/news.json");
const people: Person[] = [];
const projects: Project[] = [];
const publications: Publication[] = [];


@Injectable()
export class MockDataService {

  constructor() {
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
