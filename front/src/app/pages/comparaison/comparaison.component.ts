import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.scss']
})
export class ComparaisonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getFormData(payload) {
    console.log(payload);
  }

}