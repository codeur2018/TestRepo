import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  apiURL = './datas/data.json';

  constructor(
    private http: Http
  ) { }

  getUsers() {
    return this.http.get(this.apiURL).map((res: Response) => {res.json(); });
  }

}
