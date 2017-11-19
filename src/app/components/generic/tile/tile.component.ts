import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() height: number;
  @Input() route?: RouterLink;
  @Input() icon?: string;

  constructor() {}

  ngOnInit() {
  }

  getHeight(): number {
    return this.height - 121;
  }

}
