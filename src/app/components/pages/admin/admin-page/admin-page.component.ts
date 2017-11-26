import {Component, OnInit} from '@angular/core';

const navItems = [
  {url: "/admin/people", name: "Lidé"},
  {url: "/admin/news", name: "Novinky"},
  {url: "/admin/about", name: "O nás"},
  {url: "/admin/publications", name: "Publikace"},
  {url: "/admin/projects", name: "Projekty"},
];
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getNavigationItems(): AdminNavigation[] {
    return navItems;
  }

  isNavItemSelected(navItem: AdminNavigation): boolean {
    return false;
  }

}

export interface AdminNavigation {
  url: string;
  name: string;
}
