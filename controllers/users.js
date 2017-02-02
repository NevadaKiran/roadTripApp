var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Trip = require('../models/trip.js');
var authHelpers = require('../helpers/auth.js')

//INDEX to display all users.
router.get('/', function(req, res){
  User.find({})
  .exec(function(err, users){
    if (err) {console.log(err);}
    res.render('users/index.hbs', {users: users});
  });
});

//CREATE SIGNUP
router.get('/signup', function(req, res){
  res.render('users/signup.hbs')
});



//SHOW
router.get('/:id', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user){
    if (err) console.log(err);
    // console.log(user.trips.push());
    res.render('users/show.hbs', {
      users:user,
      userId: req.params.id
    });
  })
});


//USER REGISTRATION
router.post('/', authHelpers.createSecure, function(req, res){

  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if (err)console.log(err);
    console.log(user);
    console.log(req.session.currentUser);
    res.redirect('/sessions/login');
  });
});

module.exports = router;
