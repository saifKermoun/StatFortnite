import { Component, OnInit } from '@angular/core';
import {StatsService} from "../../shared/service/StatService/stats.service";

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.scss']
})
export class ComparaisonComponent implements OnInit {

  loading: boolean = false;
  flagComparaison: boolean = false;

  self = {};
  p1 = {};
  p2 = {};
  p3 = {};

  constructor(private statService: StatsService) { }

  ngOnInit() {
  }

  getFormData(payload) {
    this.loading = true;
    setTimeout(() => this.getStatsComparaison(payload), 1000 );
    this.flagComparaison = false;
  }

  getStatsComparaison(payload) {
    this.statService.getComparaisonStats(payload).subscribe(res => {
        this.self = res[0];
        this.p1 = res[1];
        this.p2 = res[2];
        this.p3 = res[3];
    },
      err => console.error(err),
      () => (this.loading = false, this.flagComparaison = true, console.log(this.p1))
    )
  }

}
