import {Injectable} from '@angular/core';

const newsColor = "#ff1744";
const projectsColor = "#00bfa5";
const publicationsColor = "#b388ff";
const peopleColor = "#ffab40";
const aboutColor = "#2979ff";

const map = new Map<string, NavItem>();
map["news"] = {url: 'news', key: 'news', color: newsColor, icon: 'question_answer'};
map["projects"] = {url: 'projects', key: 'projects', color: projectsColor, icon: 'business_center'};
map["publications"] = {url: 'publications', key: 'publications', color: publicationsColor, icon: 'create'};
map["people"] = {url: 'people', key: 'people', color: peopleColor, icon: 'person'};
map["about"] = {url: 'about', key: 'about', color: aboutColor, icon: 'info'};

const navItems: NavItem[] = [
  map["news"],
  map["projects"],
  map["publications"],
  map["people"],
  map["about"],
];

@Injectable()
export class NavigationService {

  constructor() {}

  getNavItems(): NavItem[] {
    return navItems;
  }

  getItem(section: string): NavItem {
    return map[section];
  }

}

export interface NavItem {
  url: string;
  key: string;
  color: string;
  icon: string;
}
