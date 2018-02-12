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
      () => this.getRecentUserStat(this.$user.platformName)
      );
  }

  getRecentUserStat(username) {

    this.statS.getRecentUserStat(username).subscribe(
      res => {
        this.$matchRecents = res
      },
      err => console.error(err),
      () => console.log(this.$matchRecents)
    )
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //Les dates
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  //les Kills
  public barChartData:any[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Kill'}
  ];
}
