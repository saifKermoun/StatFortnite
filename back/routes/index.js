var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var dateFormat = require('dateformat');


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
var $payload = [];


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

    var platform, self, p1, p2, p3;

    platform = req.params.platform;

    self = req.params.self;
    p1 = req.params.p1;
    p2 = req.params.p2;
    p3 = req.params.p3;

    var urlSelf = Url + platform + '/' + self;
    var urlP1 = Url + platform + '/' + p1;
    var urlP2 = Url + platform + '/' + p2;
    var urlP3 = Url + platform + '/' + p3;

    request.get(urlSelf, options, function (err, response, body) {
        if (err) { return console.log(err); }
        $body = JSON.parse(body);
        this.self = {
            username : $body.epicUserHandle,
            stats: $body.stats,
            lifeTimeStats: $body.lifeTimeStats
        };
        $payload.push({self : this.self})
    });

    if(p1 !== "KO") {

        request.get(urlP1, options, function (err, response, body) {
            if (err) { return console.log(err); }
            $body = JSON.parse(body);
            this.p1 = {
                username : $body.epicUserHandle,
                stats: $body.stats,
                lifeTimeStats: $body.lifeTimeStats
            };
            $payload.push({p1 : this.p1})

        });
    }

    if(p2 !== "KO") {
        request.get(urlP2, options, function (err, response, body) {
            if (err) { return console.log(err); }
            $body = JSON.parse(body);
            this.p2 = {
                username : $body.epicUserHandle,
                stats: $body.stats,
                lifeTimeStats: $body.lifeTimeStats
            };
            $payload.push({p2: this.p2})

        });
    }

    if(p3 !== "KO") {
        request.get(urlP3, options, function (err, response, body) {
            if (err) { return console.log(err); }
            $body = JSON.parse(body);
            this.p3 = {
                username : $body.epicUserHandle,
                stats: $body.stats,
                lifeTimeStats: $body.lifeTimeStats
            };
            $payload.push({p3: this.p3})
        });
    }

    console.log(self, p1, p2, p3)

   res.send($payload);
    $payload = [];

});


module.exports = router;
