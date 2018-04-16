import {Component, NgModule, OnInit} from '@angular/core';

import {MatMenuModule, MatToolbarModule} from "@angular/material";
@NgModule ({
  imports : [MatMenuModule, MatToolbarModule],
  exports : [MatMenuModule, MatToolbarModule],
})

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
