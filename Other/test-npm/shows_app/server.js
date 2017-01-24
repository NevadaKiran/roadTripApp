var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/favorite-shows', function(req, res) {
    var favShows = ["BSG", 'The Mentalist', 'The Wire', 'Game of Thrones', 'WestWorld'];

    res.render('favorite-shows', {
          data: favoriteFoods
