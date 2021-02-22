import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gh-profile-repos-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo: any;

  constructor() { }

  ngOnInit(): void {
  }
}
