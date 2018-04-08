import {Component} from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readyToCharge = false;
  putPayloadForm = {};
  payloadMatchHistory = {};

  constructor() { }

  ngOnInit() { }


  /*getGeneralOnlyStat(username) {
    this.statS.getStat('pc', username).subscribe(
        res => {
          this.$resStat = res;
          if (!this.$resStat.error) {
            this.$user = {
              accountId : res.accountId,
              platformID: res.accountId,
              platformName : res.platformName,
              platformNameLong : res.platformNameLong,
              epicUserHandle : res.epicUserHandle
            };
            this.$lifeTimeStats = {
              totWin : res.lifeTimeStats[8].value,
              totMatches : res.lifeTimeStats[7].value,
              totKill : res.lifeTimeStats[10].value,
              totKD : res.lifeTimeStats[11].value,
              totWPerc : res.lifeTimeStats[9].value,
              totScore : res.lifeTimeStats[6].value,
              timePlayed : res.lifeTimeStats[13].value,
            };
            this.$SoloGame = this.$resStat.stats['p2'];
            this.$SquadGame = this.$resStat.stats['p9'];
            this.$DuoGame = this.$resStat.stats['p10'];
          } else {
            this.$resStat = res;
          }
        },
        err => this.errors.handleError('Erreur', 'Une erreur est survenue.'),
        //() => console.log()
    )
  };*/

  getFormData(payload) {
    setTimeout(() => this.readyToCharge = true);
    this.putPayloadForm = {payload : payload, charged : true};
  }

  getIfCanCharge(can) {
    this.readyToCharge = can;
  }

  getMatchHistory(payload) {
    this.payloadMatchHistory = {payload : payload, charged : true};
  }

}
