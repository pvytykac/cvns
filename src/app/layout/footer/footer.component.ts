import { Component, OnInit } from '@angular/core';
import {MockDataService} from "../../mock-data.service";
import {Info} from "../../dto/Info";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private data: MockDataService) { }

  ngOnInit() {
  }

  getInfo(): Info {
    return this.data.getInfo();
  }

}
