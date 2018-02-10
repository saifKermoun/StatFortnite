var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var fs = require('fs');
var dateFormat = require('dateformat');

const Url = "https://api.fortnitetracker.com/v1/profile/";
const ApiKey = "c5ab6bb9-da9d-4f67-8c11-54bcec58dbe7";
var options = {
    headers : {
        'TRN-Api-Key' : ApiKey
    }
};
const rep = "../historiques/";
var $body;
var $fileContent = {
    userId : '',
    date : '',
    content : {}
};
var $filePath;
var $accountId;
var obj;

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

    request.get(newUrl, options, function (err, ress, body) {
        if (err) { return console.log(err); }
        $body = JSON.parse(body);
        $accountId = $body.accountId;
        $fileContent = JSON.stringify({
            userId:  $accountId,
            date: dateFormat(Date.now(), "yyyy-mm-dd"),
            content : $body.recentMatches
        });
        $filePath = $accountId + ".json";
        createFile(rep + $filePath, $fileContent);
        res.send($body);
        //console.log($fileContent);
    });
});

/**
 * Crée un fichier avec la fonction fs
 */
function createFile($filePath, $fileContent) {
    fs.writeFile($filePath, $fileContent, function (err) {
        if(err) throw err;

        console.log("Done.")
    })
}

router.get('/:accountId', function (req, res, next) {
    var accountId = req.params.accountId;

    $filePath = accountId + ".json";
    readFile(rep + $filePath);
    res.send(obj);
});

function readFile($file) {
    if (fs.existsSync($file)) {
        console.log("ok");
        fs.readFile($file, 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
        })
    } else {
        console.error({message : "Le fichier n'existe pas !"})
    }
}
module.exports = router;