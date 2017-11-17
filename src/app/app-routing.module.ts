import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OverviewPageComponent} from './pages/overview-page/overview-page.component';
import {ErrorPageComponent} from './layout/error-page/error-page.component';
import {NewsComponent} from "./pages/news/news.component";
import {AboutComponent} from "./pages/about/about.component";
import {PeopleComponent} from "./pages/people/people.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {PublicationsComponent} from "./pages/publications/publications.component";
import {PersonComponent} from "./pages/person/person.component";
import {ProjectComponent} from "./pages/project/project.component";
import {PublicationComponent} from "./pages/publication/publication.component";
import {PageTemplateComponent} from "./layout/page-template/page-template.component";

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
