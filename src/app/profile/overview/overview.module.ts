import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReposComponent } from './repos/repos.component';
import { RepoComponent } from './repos/repo/repo.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { OverviewComponent } from './overview.component';


@NgModule({
  declarations: [
    ReposComponent,
    RepoComponent,
    ContributionsComponent,
    OverviewComponent
  ],
  exports: [
    ReposComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class OverviewModule { }
