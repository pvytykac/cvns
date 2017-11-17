import {Component, OnInit} from '@angular/core';
import {Info} from "../../data/dto/Info";
import {MockDataService} from "../../data/mock-data.service";
import {ActivatedRoute} from "@angular/router";
import {RoutingService} from "../../locale/routing.service";
import {TranslateService} from "../../locale/translation.service";

const navItems: NavItem[] = [
  // {url: '', key: 'home', color: 'rgb(0, 0, 0)'},
  {url: 'news', key: 'news', color: 'rgb(244, 67, 54)'},
  {url: 'projects', key: 'projects', color: 'rgb(0, 150, 136)'},
  {url: 'publications', key: 'publications', color: 'rgb(63, 81, 181)'},
  {url: 'people', key: 'people', color: 'rgb(255, 152, 0)'},
  {url: 'about', key: 'about', color: 'rgb(162, 32, 176)'},
];

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.css']
})
export class PageTemplateComponent implements OnInit {

  constructor(private data: MockDataService, private route: ActivatedRoute, private rs: RoutingService, private ts: TranslateService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.ts.setLocale(params['lang']));
  }

  getInfo(): Info {
    return this.data.getInfo();
  }

  getLocale(): string {
    return this.ts.getLocale();
  }

  getLocales(): string[] {
    return this.ts.getLocales();
  }

  isLocaleSelected(locale: string): boolean {
    return this.getLocale().toLowerCase() === locale.toLowerCase();
  }

  isNavItemSelected(navItem: NavItem): boolean {
    const route = this.rs.getRoute().split("/");
    return route && route.length > 0 && route[route.length - 1] === navItem.url;
  }

  setLocale(event: MouseEvent, locale: string): void {
    event.preventDefault();
    if (!this.isLocaleSelected(locale)) {
      const url = this.rs.getRoute();
      this.ts.setLocale(locale);
      this.rs.routeByUrlWithLocale(url);
    }
  }

  getNavigationItems(): NavItem[] {
    return navItems;
  }

  isNavMenuVisible(): boolean {
    return this.rs.getRoute().indexOf('/', 1) > 0;
  }
}

export interface NavItem {
  url: string;
  key: string;
  color: string;
}
