import {Injectable} from '@angular/core';

const newsColor = "#ff1744";
const projectsColor = "#00bfa5";
const publicationsColor = "#2979ff";
const peopleColor = "#ffab40";
const aboutColor = "#aa00ff";

const colors = new Map<string, string>();
colors["news"] = newsColor;
colors["projects"] = projectsColor;
colors["publications"] = publicationsColor;
colors["people"] = peopleColor;
colors["about"] = aboutColor;

const navItems: NavItem[] = [
  {url: 'news', key: 'news', color: newsColor},
  {url: 'projects', key: 'projects', color: projectsColor},
  {url: 'publications', key: 'publications', color: publicationsColor},
  {url: 'people', key: 'people', color: peopleColor},
  {url: 'about', key: 'about', color: aboutColor},
];

@Injectable()
export class NavigationService {

  constructor() {}

  getNavItems(): NavItem[] {
    return navItems;
  }

  getColor(section: string): string {
    return colors[section];
  }

}

export interface NavItem {
  url: string;
  key: string;
  color: string;
}
