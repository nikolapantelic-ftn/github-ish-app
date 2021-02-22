import { Component, OnInit } from '@angular/core';
import { Repo } from './repo';

@Component({
  selector: 'gh-profile-overview-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: Array<Repo>;

  constructor() {
    this.repos = [];
  }

  ngOnInit(): void {
    this.repos.push({
      name: 'platform-tutor-ui-web',
      description: 'Web UI for Clean CaDET tutor.'
    });
    this.repos.push({
      name: 'platform-java-compiler',
      description: 'This is a description for platform-java-compiler.'
    });
  }

}
