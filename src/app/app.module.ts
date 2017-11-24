import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ErrorPageComponent} from "./components/layout/error-page/error-page.component";
import {OverviewPageComponent} from './components/pages/overview-page/overview-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {TileComponent} from './components/generic/tile/tile.component';
import {HttpModule} from "@angular/http";
import {MockDataService} from "./data/mock-data.service";
import {NewsComponent} from './components/pages/news/news.component';
import {AboutComponent} from './components/pages/about/about.component';
import {PeopleComponent} from './components/pages/people/people.component';
import {PublicationsComponent} from './components/pages/publications/publications.component';
import {ProjectsComponent} from './components/pages/projects/projects.component';
import {PersonComponent} from './components/pages/person/person.component';
import {ProjectComponent} from './components/pages/project/project.component';
import {PublicationComponent} from './components/pages/publication/publication.component';
import {NewsItemComponent} from './components/pages/overview-page/news-item/news-item.component';
import {ProjectsItemComponent} from './components/pages/overview-page/projects-item/projects-item.component';
import {PublicationsItemComponent} from './components/pages/overview-page/publications-item/publications-item.component';
import {PeopleItemComponent} from './components/pages/overview-page/people-item/people-item.component';
import {TranslationPipe} from './pipes/translation.pipe';
import {TranslateService} from "./service/translation.service";
import {RoutingService} from "./service/routing.service";
import {PageTemplateComponent} from './components/layout/page-template/page-template.component';
import {RouterLinkDirective} from './directives/router-link.directive';
import {NavigationService} from "./service/navigation.service";
import {AboutItemComponent} from './components/pages/overview-page/about-item/about-item.component';
import {MaterializeModule} from 'angular2-materialize';
import { CollectionComponent } from './components/generic/collection/collection.component';
import {PersonDetailComponent} from "./components/pages/people/people-item/person-detail.component";
import { CapitalizePipe } from './pipes/capitalize.pipe';


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
    AboutItemComponent,
    CollectionComponent,
    PersonDetailComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [MockDataService, TranslateService, RoutingService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
