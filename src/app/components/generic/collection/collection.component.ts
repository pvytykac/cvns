import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() promise?: Promise<any>;
  @Input() items?: any[];
  @Input() color?: string;
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
