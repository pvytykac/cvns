import {Person} from "./Person";

export interface Project {
  id: number;
  contact: Person;
  image: string;
  name: string;
  from?: string;
  to?: string;
  text: string;
}
