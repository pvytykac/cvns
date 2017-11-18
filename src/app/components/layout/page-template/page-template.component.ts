import {Component, OnInit} from '@angular/core';
import {Info} from "../../../data/dto/Info";
import {MockDataService} from "../../../data/mock-data.service";
import {ActivatedRoute} from "@angular/router";
import {RoutingService} from "../../../service/routing.service";
import {TranslateService} from "../../../service/translation.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {NavigationService, NavItem} from "../../../service/navigation.service";

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.css']
})
export class PageTemplateComponent implements OnInit {

  mapUrl: SafeResourceUrl;

  constructor(private data: MockDataService, private route: ActivatedRoute, private rs: RoutingService,
              private ts: TranslateService, private sanitizer: DomSanitizer, private ns: NavigationService) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?q="
      + encodeURIComponent(this.getInfo().address)
      + "&key=" + encodeURIComponent(this.getInfo().googleApiKey));
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
    return this.ns.getNavItems();
  }

  isNavMenuVisible(): boolean {
    return this.rs.getRoute().indexOf('/', 1) > 0;
  }

  getMapWidgetUrl(): SafeResourceUrl {
    return this.mapUrl;
  }
}
