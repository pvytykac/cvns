import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() promise?: Promise<any>;
  @Input() observable?: Observable<any>;
  @Input() items?: any[];
  @Input() color?: string;
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
