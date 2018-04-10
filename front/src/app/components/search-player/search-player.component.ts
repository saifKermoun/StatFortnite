import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormModel} from "../../shared/model/form.model";


@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.scss']
})
export class SearchPlayerComponent implements OnInit {

  user = new FormModel;
  selected = "pc";

  @Output() formData = new EventEmitter<FormModel>();

  constructor() { }

  ngOnInit() {
  }

  putFormData(platform, username) {
    this.user = {
      platforms: platform,
      username : username
    };

    this.formData.emit(this.user);
  }

}
