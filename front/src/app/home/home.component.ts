import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StatsService } from '../service/stats.service';
import { ErrorService } from "../service/toastr/toastr.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  $resStat = {
    error : {},
    stats : {},
    recentMatches : {}
  };

  $user = {
    accountId: '',
    platformID : '',
    platformName : '',
    platformNameLong : '',
    epicUserHandle : ''
  };
  $lifeTimeStats = {
    totWin : '',
    totMatches: '',
    totKill : '',
    totKD : '',
    totWPerc : '',
    totScore : '',
    timePlayed : ''
  };
  $SoloGame = {
    kd : {
      label : '',
      value: ''
    },
    top1 : {
      label: '',
      value: ''
    },
    kills : {
      label: '',
      value: ''
    },
    winRatio : {
      label: '',
      value: ''
    },
    matches : {
      label: '',
      value: ''
    }
  };
  $DuoGame =  {
    kd : {
      label : '',
      value: ''
    },
    top1 : {
      label: '',
      value: ''
    },
    kills : {
      label: '',
      value: ''
    },
    winRatio : {
      label: '',
      value: ''
    },
    matches : {
      label: '',
      value: ''
    }
  };
  $SquadGame =  {
    kd : {
      label : '',
      value: ''
    },
    top1 : {
      label: '',
      value: ''
    },
    kills : {
      label: '',
      value: ''
    },
    winRatio : {
      label: '',
      value: ''
    },
    matches : {
      label: '',
      value: ''
    }
  };
  $inputs = {
    platforms: 'pc',
    username: 'haadokenn'
  };
  $recentMatch;
  username: any;
  constructor(private statS: StatsService, private errors: ErrorService, private route: ActivatedRoute) {

  }

  ngOnInit() {
     this.username = this.route.snapshot.params.username;
      if(!this.username) {
        this.getStat(this.$inputs.platforms, this.$inputs.username);
      } else {
        this.getGeneralOnlyStat(this.username)
      }

      //console.log(username);

  }

  /**
   * Récupere au format json les stats du joueur selon : :platform / :username
   * La fonction fait appel à un service "StatsService" et à la fonction getStat(platform,username)
   * dans la variable $resStat => le json complet tel qu'on le recupere,
   * dans la variable $user => les infos de l'utilisateur voir structure ci-dessus
   * dans la variable $lifeTimeStats => les info stat de l'utilisateur voir structure ci-dessus
   * dans la variable $SoloGame => les info en solo game , console.log(this.$SoloGame) pour voir son contenu
   * dans la variable $DuoGame => les info en duo game ,      //                               //
   * dans la variable $SquadGame => les info en suqad game ,      //                               //
   */
  getStat(platform, username) {
    this.statS.getStat(platform, username).subscribe(
      res => {
        if (!res.error) {
          this.$resStat = res;
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
          this.$recentMatch = this.$resStat.recentMatches;
        } else {
          this.$resStat = res;
        }
      },
      err => this.errors.handleError('Server down', 'Le serveur est éteint.'),
      // () => console.log()
    );
  }

  getGeneralOnlyStat(username) {
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
  };

}
