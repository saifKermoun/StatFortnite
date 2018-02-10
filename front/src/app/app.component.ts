import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StatsService } from './service/stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public $resStat;
  public $matchRecents;
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
  $SoloGame = [];
  $DuoGame = [];
  $SquadGame = [];

  options: any;

  constructor(private statS: StatsService) {

  }

  ngOnInit() {
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
    this.statS.getStat('pc', 'haadokenn').subscribe(
      res => {
        this.$resStat = res;
        this.$user = {
          accountId : this.$resStat.accountId,
          platformID: this.$resStat.accountId,
          platformName : this.$resStat.platformName,
          platformNameLong : this.$resStat.platformNameLong,
          epicUserHandle : this.$resStat.epicUserHandle
        };
        this.$lifeTimeStats = {
          totWin : this.$resStat.lifeTimeStats[8].value,
          totMatches : this.$resStat.lifeTimeStats[7].value,
          totKill : this.$resStat.lifeTimeStats[10].value,
          totKD : this.$resStat.lifeTimeStats[11].value,
          totWPerc : this.$resStat.lifeTimeStats[9].value,
          totScore : this.$resStat.lifeTimeStats[6].value,
          timePlayed : this.$resStat.lifeTimeStats[13].value,
        };
        this.$SoloGame.push(this.$resStat.stats['p2']);
        this.$SquadGame.push(this.$resStat.stats['p9']);
        this.$DuoGame.push(this.$resStat.stats['p10']);
      },
      err => console.error(err),
      () => this.getRecentUserStat(this.$user.accountId)
      );
    let xAxisData = [];
    let data1 = [];
    let data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'quatricInOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }

  getRecentUserStat(accountId) {

    this.statS.getRecentUserStat(accountId).subscribe(
      res => {
        this.$matchRecents = res
      },
      err => console.error(err),
      () => console.log(this.$matchRecents)
    )
  }
}
