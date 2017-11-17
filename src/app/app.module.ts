import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ErrorPageComponent} from "./layout/error-page/error-page.component";
import {OverviewPageComponent} from './pages/overview-page/overview-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {TileComponent} from './generic/tile/tile.component';
import {HttpModule} from "@angular/http";
import {MockDataService} from "./data/mock-data.service";
import {NewsComponent} from './pages/news/news.component';
import {AboutComponent} from './pages/about/about.component';
import {PeopleComponent} from './pages/people/people.component';
import {PublicationsComponent} from './pages/publications/publications.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {PersonComponent} from './pages/person/person.component';
import {ProjectComponent} from './pages/project/project.component';
import {PublicationComponent} from './pages/publication/publication.component';
import {NewsItemComponent} from './pages/overview-page/news-item/news-item.component';
import {ProjectsItemComponent} from './pages/overview-page/projects-item/projects-item.component';
import {PublicationsItemComponent} from './pages/overview-page/publications-item/publications-item.component';
import {PeopleItemComponent} from './pages/overview-page/people-item/people-item.component';
import {TranslationPipe} from './locale/translation.pipe';
import {TranslateService} from "./locale/translation.service";
import {RoutingService} from "./locale/routing.service";
import {PageTemplateComponent} from './layout/page-template/page-template.component';
import { RouterLinkDirective } from './my-router-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    OverviewPageComponent,
    TileComponent,
    NewsComponent,
    AboutComponent,
    PeopleComponent,
    PublicationsComponent,
    ProjectsComponent,
    PersonComponent,
    ProjectComponent,
    PublicationComponent,
    NewsItemComponent,
    ProjectsItemComponent,
    PublicationsItemComponent,
    PeopleItemComponent,
    TranslationPipe,
    PageTemplateComponent,
    RouterLinkDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MockDataService, TranslateService, RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
