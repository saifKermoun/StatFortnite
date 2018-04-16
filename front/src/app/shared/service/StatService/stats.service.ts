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

  getComparaisonStats(payload): Observable<any> {
    if(payload.player1 === '') {
      payload.player1 = "KO";
    }
    if(payload.player2 === '') {
      payload.player2 = "KO";
    }
    if(payload.player3 === '') {
      payload.player3 = "KO";
    }

    console.log(payload);

    const newUrl = this.URL + 'comp/' + payload.platform + '/' + payload.self + '/' + payload.player1 + '/' + payload.player2 + '/' + payload.player3;
    return this.http.get(newUrl);
  }

}
