import { Component, OnInit } from '@angular/core';
import { Repo } from './repo';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'gh-profile-overview-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos$: Observable<Repo[]>;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.repos$ = this.userService.getUserRepos();
  }

}
