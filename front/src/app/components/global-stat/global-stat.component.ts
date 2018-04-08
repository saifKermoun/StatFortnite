import {Component, OnInit, Input,Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import {FormModel} from "../../shared/model/form.model";
import {StatsService} from "../../shared/service/StatService/stats.service";
import {PayloadModel} from "../../shared/model/payload.model";
import {ToastrService} from "ngx-toastr";
import {UserModel} from "../../shared/model/user.model";
import {GlobalStatModel} from "../../shared/model/globalStat.model";
import {LifetimeModel} from "../../shared/model/lifetime.model";


@Component({
  selector: 'app-global-stat',
  templateUrl: './global-stat.component.html',
  styleUrls: ['./global-stat.component.scss']
})
export class GlobalStatComponent implements OnInit {

  @Input() putFormInput: FormModel;
  @Output() readyToCharge = new EventEmitter<boolean>();
  @Output() matchHistory = new EventEmitter<object>();

  $resStat = new PayloadModel;
  $lifeTimeStats = new LifetimeModel;
  $user = new UserModel;
  $SoloGame = new GlobalStatModel;
  $DuoGame = new GlobalStatModel;
  $SquadGame = new GlobalStatModel;


  platform : string;
  username: string;

  solo = 'p2';
  duo = 'p10';
  squad = 'p9';

  //readyToCharge: boolean;

  constructor(private statService: StatsService, private toastrService: ToastrService){ }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.platform = changes.putFormInput.currentValue.payload.platforms;
    this.username = changes.putFormInput.currentValue.payload.username;

    this.getStat(this.platform, this.username)
  }

  getStat(platform, username) {
    this.statService.getStat(platform, username).subscribe(
      res => {
        if (!res.error) {
          this.$resStat = res;

          this.$user =  {
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

          this.$SoloGame =  {
            kd : {
              label : this.$resStat.stats[this.solo]['kd'].label,
              value : this.$resStat.stats[this.solo]['kd'].value
            },
            top1 : {
              label : this.$resStat.stats[this.solo]['top1'].label,
              value : this.$resStat.stats[this.solo]['top1'].value
            },
            kills : {
              label : this.$resStat.stats[this.solo]['kills'].label,
              value : this.$resStat.stats[this.solo]['kills'].value
            },
            winRatio : {
              label : this.$resStat.stats[this.solo]['winRatio'].label,
              value : this.$resStat.stats[this.solo]['winRatio'].value
            },
            matches : {
              label : this.$resStat.stats[this.solo]['matches'].label,
              value : this.$resStat.stats[this.solo]['matches'].value
            }
          };

          this.$DuoGame = {
            kd : {
              label : this.$resStat.stats[this.duo]['kd'].label,
              value : this.$resStat.stats[this.duo]['kd'].value
            },
            top1 : {
              label : this.$resStat.stats[this.duo]['top1'].label,
              value : this.$resStat.stats[this.duo]['top1'].value
            },
            kills : {
              label : this.$resStat.stats[this.duo]['kills'].label,
              value : this.$resStat.stats[this.duo]['kills'].value
            },
            winRatio : {
              label : this.$resStat.stats[this.duo]['winRatio'].label,
              value : this.$resStat.stats[this.duo]['winRatio'].value
            },
            matches : {
              label : this.$resStat.stats[this.duo]['matches'].label,
              value : this.$resStat.stats[this.duo]['matches'].value
            }
          };

          this.$SquadGame = {
            kd : {
              label : this.$resStat.stats[this.squad]['kd'].label,
              value : this.$resStat.stats[this.squad]['kd'].value
            },
            top1 : {
              label : this.$resStat.stats[this.squad]['top1'].label,
              value : this.$resStat.stats[this.squad]['top1'].value
            },
            kills : {
              label : this.$resStat.stats[this.squad]['kills'].label,
              value : this.$resStat.stats[this.squad]['kills'].value
            },
            winRatio : {
              label : this.$resStat.stats[this.squad]['winRatio'].label,
              value : this.$resStat.stats[this.squad]['winRatio'].value
            },
            matches : {
              label : this.$resStat.stats[this.squad]['matches'].label,
              value : this.$resStat.stats[this.squad]['matches'].value
            }
          };

          this.matchHistory.emit(this.$resStat.recentMatches);
        } else {
          this.$resStat = res;
        }
      },
      err => (
        this.toastrService.warning('Server down', 'Le serveur est éteint.'),
        this.emitChange()
      )
      //() => console.log(this.$SoloGame.kd, 'done')
    );
  }

  emitChange() {
    setTimeout(() => this.readyToCharge.emit(false))
  }

}
