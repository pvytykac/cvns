import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() items?: any[];
  @Input() route?: RouterLink;
  @Input() icon?: string;
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {
  }

  getStyle(): any {
    return {
      backgroundColor: this.color
    };
  }

}
