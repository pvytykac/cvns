import {Field} from "./Field";

export interface Person {
  id: number;
  firstname: string;
  lastname: string;
  fields?: Field[];
  email?: string;
  info?: string;
  photo?: string;
  titlesBefore?: string;
  titlesAfter?: string;
  muniUrl?: string;
}
