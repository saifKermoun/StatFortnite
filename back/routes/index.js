var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var rp = require('request-promise');


const Url = "https://api.fortnitetracker.com/v1/profile/";
const ApiKey = "c5ab6bb9-da9d-4f67-8c11-54bcec58dbe7";
var options = {
    headers : {
        'TRN-Api-Key' : ApiKey
    }
};

var self = {
    username : '',
    stats: {},
    lifeTimeStats : {}

};
var p1 = {
    username : '',
    stats: {},
    lifeTimeStats : {}
};
var p2 = {
    username : '',
    stats: {},
    lifeTimeStats : {}
};
var p3 = {
    username : '',
    stats: {},
    lifeTimeStats : {}
};

var $body;

var flag = true;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

/**
 * GET all stat user.
 * By :platform (PC/Xbox/ps4),
 * By :username
 **/
router.get('/:platform/:username', function(req, res, next) {
    var platform = req.params.platform;
    var username = req.params.username;
    var newUrl = Url+platform+'/'+username;

    request.get(newUrl, options, function (err, response, body) {
        if (err) { return console.log(err); }
        $body = JSON.parse(body);
        res.send($body);
    });
});

router.get('/info', function(req, res, next) {
    res.send({info: 'On', status: res.statusCode});
});

//TODO : fajouter du async et await pour que les payload sois bien implémenter.



router.get('/comp/:platform/:self/:p1/:p2/:p3', function(req, res, next) {
    var $payload = [];
    var platform, self, p1, p2, p3;

    platform = req.params.platform;
    self = req.params.self;
    p1 = req.params.p1;
    p2 = req.params.p2;
    p3 = req.params.p3;

    var options = {
        headers : {
            'TRN-Api-Key' : ApiKey
        },
        json: true
    };
    var uriSelf = Url + platform + '/' + self;
    var uriP1 = Url + platform + '/' + p1;
    var uriP2 = Url + platform + '/' + p2;
    var uriP3 = Url + platform + '/' + p3;

    if(self !== 'KO') {
        rp(uriSelf,options)
            .then(function(repos) {
                this.self = {
                    username : repos.epicUserHandle,
                    stats: repos.stats,
                    lifeTimeStats: repos.lifeTimeStats
                };
                $payload['0'] = this.self;

            })
            .catch(function(err) {
                console.log(err.message)
            });
    }

    if(p1 !== 'KO') {
        rp(uriP1,options)
            .then(function(repos) {
                this.p1 = {
                    username : repos.epicUserHandle,
                    stats: repos.stats,
                    lifeTimeStats: repos.lifeTimeStats
                };
                $payload['1'] = this.p1;
                console.log('done p1')
            })
            .catch(function(err) {
                console.log(err.message)
            });
    }

    if(p2 !== 'KO') {
        rp(uriP2,options)
            .then(function(repos) {
                this.p2 = {
                    username : repos.epicUserHandle,
                    stats: repos.stats,
                    lifeTimeStats: repos.lifeTimeStats
                };
                $payload['2'] = this.p2;
                console.log('done p2')
            })
            .catch(function(err) {
                console.log(err.message)
            });
    }

    if(p3 !== 'KO') {
        rp(uriP3,options)
            .then(function(repos) {
                this.p3 = {
                    username : repos.epicUserHandle,
                    stats: repos.stats,
                    lifeTimeStats: repos.lifeTimeStats
                };
                $payload['3'] = this.p3;
                console.log('done p3')
            })
            .catch(function(err) {
                console.log(err.message)
            });
    }

    setTimeout(function(){
        res.send($payload);
    }, 2000);

});

module.exports = router;
