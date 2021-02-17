import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SearchComponent } from './core/navbar/search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './profile/user/user.component';
import { OverviewComponent } from './profile/overview/overview.component';
import { ReposComponent } from './profile/repos/repos.component';
import { ContributionsComponent } from './profile/overview/contributions/contributions.component';
import { RepoComponent } from './profile/overview/repos/repo/repo.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProfileNavbarComponent } from './profile/profile-navbar/profile-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ProfileComponent,
    UserComponent,
    OverviewComponent,
    ReposComponent,
    ContributionsComponent,
    RepoComponent,
    ProfileNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
