import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from "../../../service/navigation.service";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() navItem: NavItem;
  @Input() height: number;

  constructor() {}

  ngOnInit() {
  }

  getHeight(): number {
    return this.height - 121;
  }

}
