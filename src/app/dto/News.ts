import {Tag} from "@angular/compiler/src/i18n/serializers/xml_helper";

export interface News {
  id: number;
  title: string;
  text: string;
  tags: Tag[];
}
