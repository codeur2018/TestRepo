import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  apiURL = 'https://jsonplaceholder.typicode.com/users';
  apiURL2 = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: Http
  ) { }

  getUsers() {
    return this.http.get(this.apiURL).map((res =>  res.json());
  }

  getPosts() {
    return this.http.get(this.apiURL2).map((res => res.json());
  }

}
