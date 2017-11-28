var express = require('express');
var router = express.Router();

var albums = require('../data/albums.json');

/* GET api/results request. */
app.get('/', function(req, res, next) {
    res.send(albums);
});

module.exports = router;
