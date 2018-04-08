import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.local';

@Injectable()
export class StatsService {
  URL = environment.apiUrl + environment.backPort + '/';

  constructor(private http: HttpClient) { }

  getStat(platform, username): Observable<any> {
    const newUrl = this.URL + platform + '/' + username;
    return this.http.get(newUrl);
  }

}
