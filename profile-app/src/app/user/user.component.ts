import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];
  constructor(public _service: ProfileService) {}

  ngOnInit() {
    this._service.getUsers().subscribe(users => this.users = users);
  }

}
