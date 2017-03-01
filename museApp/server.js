var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var museController = ('./public/js/museController.js');
var app = express();


app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(logger('dev'));


var port = 4000;
app.listen(port, function(){
  console.log("LISTENING to 4000")
})
