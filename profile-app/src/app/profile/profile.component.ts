import { Component, OnInit } from '@angular/core';
import { ProfileItemComponent } from './profile-item';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  articlesList = [];
  constructor(public _service: ProfileService) { }

  ngOnInit() {
    this._service.getPosts().subscribe(articles => this.articlesList = articles);
  }

}
