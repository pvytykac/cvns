import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OverviewPageComponent} from './components/pages/overview-page/overview-page.component';
import {ErrorPageComponent} from './components/layout/error-page/error-page.component';
import {NewsComponent} from "./components/pages/news/news.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {PeopleComponent} from "./components/pages/people/people.component";
import {ProjectsComponent} from "./components/pages/projects/projects.component";
import {PublicationsComponent} from "./components/pages/publications/publications.component";
import {PersonComponent} from "./components/pages/person/person.component";
import {ProjectComponent} from "./components/pages/project/project.component";
import {PublicationComponent} from "./components/pages/publication/publication.component";
import {PageTemplateComponent} from "./components/layout/page-template/page-template.component";
import {AdminPageComponent} from "./components/pages/admin/admin-page/admin-page.component";
import {AdminPeopleComponent} from "./components/pages/admin/people/admin.people.component";
import {CreatePersonComponent} from "./components/pages/admin/people/person/create-person/create-person.component";
import {UpdatePersonComponent} from "./components/pages/admin/people/person/update-person/update-person.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', redirectTo: '/cz', pathMatch: 'full'},
        {
          path: 'admin', component: AdminPageComponent, children: [
            {path: 'people', component: AdminPeopleComponent},
            {path: 'people/new', component: CreatePersonComponent},
            {path: 'people/:id', component: UpdatePersonComponent},
            {path: 'about', component: AdminPeopleComponent},
            {path: 'news', component: AdminPeopleComponent},
            {path: 'news/new', component: AdminPeopleComponent},
            {path: 'news/:id', component: AdminPeopleComponent},
            {path: 'publications', component: AdminPeopleComponent},
            {path: 'publications/new', component: AdminPeopleComponent},
            {path: 'publications/:id', component: AdminPeopleComponent},
            {path: 'projects', component: AdminPeopleComponent},
            {path: 'projects/new', component: AdminPeopleComponent},
            {path: 'projects/:id', component: AdminPeopleComponent},
          ]
        },
        {
          path: ':lang', component: PageTemplateComponent, children: [
            {path: '', component: OverviewPageComponent},
            {path: 'news', component: NewsComponent},
            {path: 'about', component: AboutComponent},
            {path: 'people', component: PeopleComponent},
            {path: 'people/:id', component: PersonComponent},
            {path: 'projects', component: ProjectsComponent},
            {path: 'projects/:id', component: ProjectComponent},
            {path: 'publications', component: PublicationsComponent},
            {path: 'publications/:id', component: PublicationComponent}
          ]
        },
        {path: '**', component: ErrorPageComponent},
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
