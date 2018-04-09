import {Component, OnInit, SimpleChanges, Input} from '@angular/core';


@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {

  @Input() getMatchHistory: object;
  $recentMatch: object;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.$recentMatch = changes.getMatchHistory.currentValue.payload;
  }

}
