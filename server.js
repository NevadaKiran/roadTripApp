var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs')
var mongoose = require('mongoose');

var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');
var tripsController = require('./controllers/trips.js');

var app = express();

// ADD THE NAME OF YOUR DATABASE
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/road_trip_app'
mongoose.connect(mongoURI);

app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(express.static("public"));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/sessions', sessionsController);
//directly getting user specific trips.
app.use('/users/:userId/trips', tripsController);

// Now that we're connected, let's save that connection to the database in a variable.
app.get('/', function(req, res){
  res.redirect('/users');
})

// Will log an error if db can't connect to MongoDB


// Will log "database has been connected" if it successfully connects.


app.listen(process.env.PORT || 4000, function(){
  console.log("WORKING SO FAR");
});
