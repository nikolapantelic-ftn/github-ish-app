import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-profile-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  edit: boolean;
  editedBio: string;

  constructor() {
    this.edit = false;
  }

  ngOnInit(): void {
    this.editedBio = this.user.bio;
  }

  editProfile(): void {
    this.editedBio = this.user.bio;
    this.edit = true;
  }

  saveChanges(): void {
    console.log('Profile edited');
    this.user.bio = this.editedBio;
    this.edit = false;
  }
}
