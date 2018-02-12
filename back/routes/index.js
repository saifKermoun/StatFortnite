var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var fs = require('fs');
var dateFormat = require('dateformat');
var mysql = require('mysql');

const db_infos = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "fortnitestat"
};

var con = mysql.createConnection(db_infos);
con.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
});

const Url = "https://api.fortnitetracker.com/v1/profile/";
const ApiKey = "c5ab6bb9-da9d-4f67-8c11-54bcec58dbe7";
var options = {
    headers : {
        'TRN-Api-Key' : ApiKey
    }
};
var $body;
var $accountId;

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
        $accountId = $body.accountId;
        $fileContent = [];

        $body.recentMatches.forEach(function(item, index) {
                $fileContent.push({
                    user_ID:  $accountId,
                    username : username,
                    date: dateFormat(item.dateCollected, "yyyy-mm-dd"),
                    kills: item.kills
                });
                //TODO : Find les doublons et additionner les kills
            var sql = "INSERT INTO stats SET ?";
            // con.query(sql, $fileContent, function (error, results, fields) {
            //     if (error) throw error;
            // })
        });
        res.send($fileContent);
    });
});
/**
 * get Stat recent match d'un joueur par :username
 */
router.get('/:username', function (req, res, next) {
    var username = req.params.username;
    username = mysql.escape(username);
    var sql = "SELECT  COUNT(`date`) AS nbr_doublon, `date`, SUM(`kills`) as totKill FROM stats WHERE `username` = " + username  + " GROUP BY `date`";
    con.query(sql, function (error, resuls, field) {
        if (error) throw error;
        else res.send(resuls);
    })
});


module.exports = router;