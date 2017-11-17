import {Tag} from "./Tag";

export interface News {
  id: number;
  title: string;
  text: string;
  tags: Tag[];
}
