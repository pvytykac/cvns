import {Directive, HostListener, Input} from '@angular/core';
import {RoutingService} from "./locale/routing.service";

@Directive({
  selector: '[appRouterLink]'
})
export class RouterLinkDirective {

  @Input() appRouterLink: string;

  constructor(private rs: RoutingService) {
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event): void {
    const url = (!this.appRouterLink || this.appRouterLink.length === 0 || this.appRouterLink.startsWith('/'))
      ? this.appRouterLink
      : '/' + this.appRouterLink;
    console.log("will navigate to: " + url);
    event.preventDefault();
    this.rs.routeByUrlWithoutLocale(url);
  }

}
