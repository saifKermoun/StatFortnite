import {Component, OnInit, Input,Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import {StatsService} from "../../shared/service/StatService/stats.service";
import {ToastrService} from "ngx-toastr";
import {UserModel} from "../../shared/model/user.model";


@Component({
  selector: 'app-global-stat',
  templateUrl: './global-stat.component.html',
  styleUrls: ['./global-stat.component.scss']
})
export class GlobalStatComponent implements OnInit {

  @Input() getGlobalSeasonStats: object;

  $user = new UserModel;

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

  constructor(){ }

  ngOnInit() {
    setTimeout(() => this.getGlobalSeasonStats)
  }

  ngOnChanges(changes: SimpleChanges) {
    const solo = changes.getGlobalSeasonStats.currentValue.p2;
    const duo = changes.getGlobalSeasonStats.currentValue.p10;
    const squad = changes.getGlobalSeasonStats.currentValue.p9;

    this.solo =  {
      kd : solo['kd'],
      top1 : solo['top1'],
      kills : solo['kills'],
      winRatio :solo['winRatio'],
      matches : solo['matches']
    };
    this.duo = {
      kd : duo['kd'],
      top1 : duo['top1'],
      kills : duo['kills'],
      winRatio :duo['winRatio'],
      matches : duo['matches']
    };
    this.squad = {
      kd : squad['kd'],
      top1 : squad['top1'],
      kills : squad['kills'],
      winRatio :squad['winRatio'],
      matches : squad['matches']
    };
  }

}
