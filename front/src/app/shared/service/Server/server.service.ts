import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.local';

@Injectable()
export class ServerService {

  URL = environment.apiUrl + environment.backPort + '/';

  constructor(private http: HttpClient) { }


  getInfoServer() {
    const newUrl = this.URL + 'info';
    return this.http.get(newUrl);
  }
}
