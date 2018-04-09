import {Injectable} from "@angular/core";

@Injectable()
export class UserModel {

  accountId: any;
  platformID : any;
  platformName : any;
  platformNameLong : any;
  epicUserHandle : any;

  constructor(obj?: any) {
    this.accountId = obj && obj.accountId || null;
    this.platformID = obj && obj.platformID || null;
    this.platformName = obj && obj.platformName || null;
    this.platformNameLong = obj && obj.platformNameLong || null;
    this.epicUserHandle = obj && obj.epicUserHandle || null;
  }
}

