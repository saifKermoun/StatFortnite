import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-comparaison-form',
  templateUrl: './comparaison-form.component.html',
  styleUrls: ['./comparaison-form.component.scss']
})
export class ComparaisonFormComponent implements OnInit {

  selected = "pc";
  flag: boolean = true;

  comparaisonPayload = {
    platform: '',
    self: '',
    player1: '',
    player2: '',
    player3: ''

  };

  @Output() putPayloadCamparaison = new EventEmitter();

  constructor(private toastService: ToastrService) { }

  ngOnInit() {
  }

  putFormData(platform, self, player1, player2, player3) {

    if(self === "") {
      this.toastService.warning("Vous devez saisir votre pseudo");
      this.flag = false;
    }

    if(player1 === "" && player2 === "" && player3 === "") {
      this.toastService.warning("Vous devez saisir aumoin le pseudo d'un joueur");
      this.flag = false;
    }

    if(this.flag === true) {

      this.comparaisonPayload = {
        platform: platform,
        self: self,
        player1: player1,
        player2: player2,
        player3: player3

      };

      this.putPayloadCamparaison.emit(this.comparaisonPayload);
    }
  }
}
