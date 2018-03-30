import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: Http
  ) { }

  getUsers() {
    return this.http.get(this.apiURL).map((res: Response) => {  console.log(res.json()); res.json(); });
  }

}
