import {Component, NgModule, OnInit } from '@angular/core';

import {MatButtonModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {ToastrService} from "ngx-toastr";
import {ServerService} from "../../shared/service/Server/server.service";
import {StatsService} from "../../shared/service/StatService/stats.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ServerService]
})

@NgModule ({
  imports : [MatButtonModule, MatSelectModule, MatTabsModule],
  exports : [MatButtonModule, MatSelectModule, MatTabsModule],
})

export class HomeComponent implements OnInit {

  readyToCharge = false;
  payloadTotalStatUser = {
    userName: '',
    lifetime: {}
  };
  payloadMatchHistory = {};
  payloadActualSeason = {
    curr_p2 : {},
    curr_p9 : {},
    curr_p10 : {},
    charged : false
  };
  payloadGlobalSeason = {
    p2 : {},
    p9 : {},
    p10 : {}
  };
  status = {};

  constructor(private toastrService: ToastrService, private serverService: ServerService, private statService: StatsService) { }

  ngOnInit() {
    this.serverService.getInfoServer().subscribe(
      res => {
          this.status = res;
      },
      err => (
          this.toastrService.warning('Le server est down, veuillez patientez quelques instants.'),
          this.readyToCharge = false
      ),
      () => console.log(this.status,'done')
    );
  }

  getFormData(payload) {
    if(payload.username != "" && this.status['status'] === 200) {
      this.getStat(payload.platforms, payload.username)
    }else {
      setTimeout(() => this.readyToCharge = false);
      this.toastrService.info("Le champ username est vide", "Info champ :")
    }
  }

  getStat(platform, username) {
    this.statService.getStat(platform, username).subscribe(
      res => {
        if (!res.error) {

          //TODO: stats joueur sur l'ensemble de la semaine, (All,solo, duo, squad),
          //TODO: stats joueur sur l'ensemble du mois, (All,solo, duo, squad)

          //TODO: Comparaison sur les stats globals, et par type de game, sur X joueur

          this.getTotalStatUser(res.epicUserHandle, res['lifeTimeStats']);
          this.getGlobalSeasonStats(res['stats']);

          this.getActualSeasonStats(res['stats']);
          this.getMatchHistory(res['recentMatches']);
        } else {
          this.toastrService.error('Player not found !');
        }
      },
      err =>  this.toastrService.warning('Server down', 'Le serveur est éteint.'),
      () =>  setTimeout(() => this.readyToCharge = true)
    );
  }

  getGlobalSeasonStats(payload) {
    this.payloadGlobalSeason = {
      p2: payload.p2,
      p9: payload.p9,
      p10: payload.p10
    };
  }

  getActualSeasonStats(payload) {
    this.payloadActualSeason = {
      curr_p2: payload.curr_p2,
      curr_p9: payload.curr_p9,
      curr_p10: payload.curr_p10,
      charged : true
    };
  }

  getMatchHistory(payload) {
    this.payloadMatchHistory = {payload :  payload};
    }

    getTotalStatUser(username, payloadLF) {
    this.payloadTotalStatUser = {
      userName: username,
      lifetime: payloadLF
    }

    }
}
