import {Injectable} from "@angular/core";

@Injectable()
export class LifetimeModel {

    totWin : any;
    totMatches: any;
    totKill : any;
    totKD : any;
    totWPerc : any;
    totScore : any;
    timePlayed : any;


  constructor(obj?: any) {
    this.totWin = obj && obj.totWin || null;
    this.totMatches= obj && obj.totMatches || null;
    this.totKill = obj && obj.totKill || null;
    this.totKD =obj && obj.totKD || null;
    this.totWPerc = obj && obj.totWPerc || null;
    this.totScore =obj && obj.totScore || null;
    this.timePlayed = obj && obj.timePlayed || null;

  }
}
