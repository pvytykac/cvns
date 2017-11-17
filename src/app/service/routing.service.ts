import {Injectable} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {TranslateService} from "./translation.service";

@Injectable()
export class RoutingService {

  constructor(private router: Router, private ts: TranslateService) { }

  getRoute(): string {
    return this.router.url;
  }

  routeByUrlWithoutLocale(url: string, extras?: NavigationExtras): void {
    const urlFixed = (url.startsWith('/')) ? url : '/' + url;
    this.router.navigateByUrl("/" + this.ts.getLocale().toLowerCase() + url);
  }

  routeByUrlWithLocale(url: string, extras?: NavigationExtras): void {
    const index = url.indexOf("/", 1);
    const urlWithoutLocale = (index > -1) ? url.substring(index) : '';
    const urlWithNewLocale = "/" + this.ts.getLocale().toLowerCase() + urlWithoutLocale;
    console.log("navigating to: " + urlWithNewLocale);
    this.router.navigateByUrl(urlWithNewLocale, extras);
  }
}
