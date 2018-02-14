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
var $body;
//var $accountId;

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

module.exports = router;
