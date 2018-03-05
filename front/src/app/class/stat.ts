export class Stat {
  hiddenHistory = false;
  hiddenStat = false;
  hiddenS3 = false;
  $resStat = {
    error : {},
    stats : {},
    recentMatches : {}
  };

  $user = {
    accountId: '',
    platformID : '',
    platformName : '',
    platformNameLong : '',
    epicUserHandle : ''
  };
  $lifeTimeStats = {
    totWin : '',
    totMatches: '',
    totKill : '',
    totKD : '',
    totWPerc : '',
    totScore : '',
    timePlayed : ''
  };
  $SoloGame = {
    kd : {
      label : '',
      value: ''
    },
    top1 : {
      label: '',
      value: ''
    },
    kills : {
      label: '',
      value: ''
    },
    winRatio : {
      label: '',
      value: ''
    },
    matches : {
      label: '',
      value: ''
    }
  };
  $DuoGame =  {
    kd : {
      label : '',
      value: ''
    },
    top1 : {
      label: '',
      value: ''
    },
    kills : {
      label: '',
      value: ''
    },
    winRatio : {
      label: '',
      value: ''
    },
    matches : {
      label: '',
      value: ''
    }
  };
  $SquadGame =  {
    kd : {
      label : '',
      value: ''
    },
    top1 : {
      label: '',
      value: ''
    },
    kills : {
      label: '',
      value: ''
    },
    winRatio : {
      label: '',
      value: ''
    },
    matches : {
      label: '',
      value: ''
    }
  };
  $inputs = {
    platforms: 'pc',
    username: 'haadokenn'
  };
  $recentMatch;
}
