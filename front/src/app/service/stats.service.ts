import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StatsService {
  URL = 'http://localhost:3900/';

  constructor(private http: HttpClient) { }

  getStat(platform, username): Observable<any> {
    const newUrl = this.URL + platform + '/' + username;
    return this.http.get(newUrl);
  }

  getRecentUserStat(userId): Observable<any> {
    const newUrl = this.URL + userId;
    return this.http.get(newUrl);
  }

}
