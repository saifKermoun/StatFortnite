import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StatsService } from './service/stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  $resStat = {
    error : {},
    stats : {}
  };
  //public $matchRecents;
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
    this.getStat(this.$inputs.platforms, this.$inputs.username)
  }

  getStat(platform, username) {
    this.statS.getStat(platform, username).subscribe(
      res => {
        if(!res.error){
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
        }else {
          this.$resStat = res;
        }
      },
      err => console.error(err),
      //() => console.log(this.$resStat)
    );
  }

  // plus tard
  // getRecentUserStat(username) {
  //
  //   this.statS.getRecentUserStat(username).subscribe(
  //     res => {
  //       this.$matchRecents = res
  //     },
  //     err => console.error(err),
  //     () => console.log(this.$matchRecents)
  //   )
  // }

  // public barChartOptions:any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // Les dates
  // public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType:string = 'bar';
  // public barChartLegend:boolean = true;
  //
  // les Kills
  // public barChartData:any[] = [
  //   {
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     label: 'Kill'}
  // ];
}
