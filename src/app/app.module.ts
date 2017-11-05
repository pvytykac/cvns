import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {ContentWrapperComponent} from './layout/content-wrapper/content-wrapper.component';
import {FooterComponent} from './layout/footer/footer.component';
import {SearchBarComponent} from './generic/search-bar/search-bar.component';
import {ErrorPageComponent} from "./layout/error-page/error-page.component";
import {OverviewPageComponent} from './pages/overview-page/overview-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {TileComponent} from './generic/tile/tile.component';
import {HttpModule} from "@angular/http";
import {MockDataService} from "./mock-data.service";
import { NewsComponent } from './pages/news/news.component';
import { AboutComponent } from './pages/about/about.component';
import { PeopleComponent } from './pages/people/people.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PersonComponent } from './pages/person/person.component';
import { ProjectComponent } from './pages/project/project.component';
import { PublicationComponent } from './pages/publication/publication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentWrapperComponent,
    FooterComponent,
    SearchBarComponent,
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
    PublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
