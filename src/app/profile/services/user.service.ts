import { Injectable } from '@angular/core';
import {Repo} from '../overview/repos/repo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private repos: Repo[] = [];

  constructor() { }

  getUserRepos(): Observable<Repo[]> {
    // poziv ka API-ju
    this.repos.push({
                      name: 'platform-tutor-ui-web',
                      description: 'Web UI for Clean CaDET tutor.'
                    });
    this.repos.push({
                      name: 'platform-java-compiler',
                      description: 'This is a description for platform-java-compiler.'
                    });
    return new Observable(observer => {
      observer.next(this.repos);
      observer.complete();
    });
  }
}
