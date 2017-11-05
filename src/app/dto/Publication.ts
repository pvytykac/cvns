import {Person} from "./Person";

export interface Publication {
  id: number;
  name: string;
  authors: Person[];
  year: number;
}
