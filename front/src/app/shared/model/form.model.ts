import {Injectable} from "@angular/core";

@Injectable()
export class FormModel {

    platforms: string;
    username: string;

  constructor(obj?: any) {
    this.platforms = obj && obj.platforms || null;
    this.username = obj && obj.username || null;
  }
}


