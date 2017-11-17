import {Component, OnInit} from '@angular/core';
import {Info} from "../../data/dto/Info";
import {MockDataService} from "../../data/mock-data.service";
import {ActivatedRoute} from "@angular/router";
import {RoutingService} from "../../locale/routing.service";
import {TranslateService} from "../../locale/translation.service";

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

  isSelected(locale: string): boolean {
    return this.getLocale().toLowerCase() === locale.toLowerCase();
  }

  setLocale(event: MouseEvent, locale: string): void {
    event.preventDefault();
    if (!this.isSelected(locale)) {
      const url = this.rs.getRoute();
      this.ts.setLocale(locale);
      this.rs.routeByUrlWithLocale(url);
    }
  }

}
