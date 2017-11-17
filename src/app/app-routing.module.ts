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

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', redirectTo: '/cz', pathMatch: 'full'},
        {
          path: ':lang', component: PageTemplateComponent, children: [
            {path: '', component: OverviewPageComponent},
            {path: 'news', component: NewsComponent},
            {path: 'about', component: AboutComponent},
            {path: 'people', component: PeopleComponent},
            {path: 'person/:id', component: PersonComponent},
            {path: 'projects', component: ProjectsComponent},
            {path: 'project/:id', component: ProjectComponent},
            {path: 'publications', component: PublicationsComponent},
            {path: 'publication/:id', component: PublicationComponent}
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
