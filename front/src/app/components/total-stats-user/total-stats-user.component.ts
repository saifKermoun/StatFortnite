import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-total-stats-user',
  templateUrl: './total-stats-user.component.html',
  styleUrls: ['./total-stats-user.component.scss']
})
export class TotalStatsUserComponent implements OnInit {

  @Input() getTotalStatUser: object;
  username: string;
  $lifeTimeStats = {
      totWin :{},
      totMatches : {},
      totKill : {},
      totKD : {},
      totWPerc : {},
      totScore : {},
      timePlayed : {}
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    let payload = changes.getTotalStatUser.currentValue;
    this.username = payload.userName;

    this.$lifeTimeStats = {
      totWin : payload.lifetime[8],
      totMatches : payload.lifetime[7],
      totKill : payload.lifetime[10],
      totKD : payload.lifetime[11],
      totWPerc : payload.lifetime[9],
      totScore : payload.lifetime[6],
      timePlayed : payload.lifetime[13]
    }

  }

}
