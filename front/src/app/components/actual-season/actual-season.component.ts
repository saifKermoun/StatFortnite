import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {GlobalStatModel} from "../../shared/model/globalStat.model";
import * as _ from "lodash";

@Component({
  selector: 'app-actual-season',
  templateUrl: './actual-season.component.html',
  styleUrls: ['./actual-season.component.scss']
})
export class ActualSeasonComponent implements OnInit {

  @Input() getActualSeasonStats: object;

  solo = {
    kd: {},
    top1: {},
    kills: {},
    winRatio: {},
    matches: {}
  };
  duo = {
    kd: {},
    top1: {},
    kills: {},
    winRatio: {},
    matches: {}
  };
  squad = {
    kd: {},
    top1: {},
    kills: {},
    winRatio: {},
    matches: {}
  };

  season: number = 3;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.getActualSeasonStats)
  }

  ngOnChanges(changes: SimpleChanges) {
    const curr_solo = changes.getActualSeasonStats.currentValue.curr_p2;
    const curr_duo = changes.getActualSeasonStats.currentValue.curr_p10;
    const curr_squad = changes.getActualSeasonStats.currentValue.curr_p9;
    if(_.get(this.solo, []) !== undefined) {

    }
    this.solo =  {
      kd : curr_solo['kd'],
      top1 : curr_solo['top1'],
      kills : curr_solo['kills'],
      winRatio :curr_solo['winRatio'],
      matches : curr_solo['matches']
    };
      this.duo = {
        kd : curr_duo['kd'],
        top1 : curr_duo['top1'],
        kills : curr_duo['kills'],
        winRatio :curr_duo['winRatio'],
        matches : curr_duo['matches']
      };
      this.squad = {
        kd : {
          label : curr_squad['kd'],
          value : curr_squad['kd']
        },
        top1 : {
          label : curr_squad['top1'],
          value : curr_squad['top1']
        },
        kills : {
          label : curr_squad['kills'],
          value : curr_squad['kills']
        },
        winRatio : {
          label : curr_squad['winRatio'],
          value : curr_squad['winRatio']
        },
        matches : {
          label : curr_squad['matches'],
          value : curr_squad['matches']
        }
      };

    console.log(this.solo);
  }

}
