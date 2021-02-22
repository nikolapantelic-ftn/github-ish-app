import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: object;

  constructor() {
    this.user = {
      name: 'Nikola',
      lastName: 'Pantelic',
      username: 'nikolapantelic-ftn',
      bio: 'Student at Faculty of Technical Sciences in Novi Sad.'
    };
  }

  ngOnInit(): void {
  }

}
