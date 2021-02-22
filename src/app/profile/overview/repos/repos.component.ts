import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-profile-overview-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.repos.push({
      name: 'platform-tutor-ui-web',
      description: 'Web UI for Clean CaDET tutor.'
    });
  }

}
