import { Component, OnInit } from '@angular/core';
import {StatsService} from "../../shared/service/StatService/stats.service";

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.scss']
})
export class ComparaisonComponent implements OnInit {

  constructor(private statService: StatsService) { }

  ngOnInit() {
  }

  getFormData(payload) {
   this.getStatsComparaison(payload)
  }

  getStatsComparaison(payload) {
    this.statService.getComparaisonStats(payload).subscribe(res => {
      console.log(res)
    },
      err => console.error(err),
      () => console.log('done.')
    )
  }

}
