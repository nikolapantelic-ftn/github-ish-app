import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'gh-profile-repos-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo: Repo;

  constructor() { }

  ngOnInit(): void {
  }
}
