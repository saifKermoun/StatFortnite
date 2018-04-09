import {Injectable} from "@angular/core";

@Injectable()
export class GlobalStatModel {

  kd = {
    label : '',
    value: ''
  };
  top1 = {
    label: '',
    value: ''
  };
  kills = {
    label: {},
    value: ''
  };
  winRatio = {
    label: '',
    value: ''
  };
  matches = {
    label: '',
    value: ''
  };

  constructor() {}
}
