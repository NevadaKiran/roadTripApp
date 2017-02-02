//======================
// REQUIREMENTS
//======================
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trip = require('../models/trip.js');
var User = require('../models/user.js');

var authHelpers = require('../helpers/auth.js')
//======================
// CREATE
//======================
// USERS TRIPS
router.post('/', function(req, res){
User.findById(req.session.currentUser._id)
.exec(function(err, user){
  user.trips.push({
    name: req.body.name,
    begin: req.body.begin,
    end: req.body.end
  });
  user.save(function(err){
    if (err) console.log(err);

    });
  });
  res.redirect('/users/' + req.session.currentUser._id)
});
// router.post('/:id/trips', function(req, res){
//   var trip = new Trip({
//     name: req.body.name,
//     begin: req.body.begin,
//     end: req.body.end
//   });
// trip.save(function(err, user){
//   if (err)console.log(err);
//   console.log(user);
//   // console.log(req.sessions.currentUser);
//   res.redirect('/sessions/login');
//   });
// });

//======================
// SHOW
//======================
//shows the trip
//users/:userId/trips/:id
// router.get('/:id', function(req, res){
//   console.log("*******1st LIST SHOW ROUTE ACCESSED")
//   User.findById(req.params.id)
//   .exec(function(err, user){
//     console.log("FOUND THE USER!", user)
//     res.render('users/show.hbs', {user})
//   });
// });
//======================
// EDIT
//======================
//RENDERS THE EDIT FORM
//users/:userId/trips/:id/
router.get('/:id/edit', function(req, res){
  console.log("*******1st LIST SHOW ROUTE ACCESSED")
  console.log("THIS IS REQ.PARAMS: ", req.params)
  User.findById(req.session.currentUser._id)
  .exec(function(err, user){
    console.log("FOUND THE USER!", user)

    //find the user trip based on ID
    var myTrip = user.trips.id(req.params.id);
    console.log("FOUND MY TRIPE!", myTrip)

    res.render('users/edit.hbs', {
      user: user,
      trip: myTrip
    })
  });
});

//======================
// UPDATE
//======================

////////////////////////////////////////////
// console.log(req.params);
// console.log(req.body);
// User.findByIdAndUpdate(id,
//   { $set:
//     { size: 'large' }},
//     { new: true },
//     function (err, tank) {
//   if (err) return handleError(err);
//   res.send(tank);
// });
// router.put('/:id', function(req, res){
//   console.log(req.params.id, "is req.params._id");
//   Trip.findByIdAndUpdate(req.params.id)
//     .exec(function(err, user){
//     var trip = User.trip(req.params.id);
//     trip.name= req.body.name,
//     trip.begin= req.body.begin,
//     trip.end= req.body.end
//   //  {new: true})
//   })
//   .then(function(user){
//     // if(err) console.log(err);
//     console.log(user);
//     // res.redirect(`/${user.id}`);
//     res.redirect('/users/' + req.session.currentUser._id);
//   });
// });
//===
// Update that saves the changes of the edit
  router.put('/:id', function(req, res) {
    console.log("Put Route ENGAGED!")
    console.log("Current User:", req.session.currentUser._id)
    User.findById(req.session.currentUser._id)
    .exec(function(err, user){
      var trip = user.trips.id(req.params.id);
      console.log("VAR TRIP", trip);
      trip.name= req.body.name;
      trip.begin= req.body.begin;
      trip.end= req.body.end;
      return user.save();
      })
      .then(function(user){
      res.redirect('/users/' + req.session.currentUser._id);
      })
    })
///////////////////////////////////////
//     User.update(
//         { _id: "DocumentObjectid" , "ArrayName.id":"ArrayElementId" },
//         { $set:{ "ArrayName.$.TheParameter":"newValue" } },
//         { upsert: true },
//         function(err){
//
//         }
//     );
// //======================
// DELETE
//======================
// REMOVE AN ITEM
router.delete('/:id', function(req, res){
  console.log(req.params, req.session);
  User.findByIdAndUpdate(req.session.currentUser._id, {

    $pull:{trips: {_id: req.params.id}}
  })
  .exec(function(err, item){
    if (err) console.log(err);
    console.log(item + " Item deleted");
    res.redirect('/users/' + req.session.currentUser._id);
  });
});

//======================
// EXPORTS
//======================
module.exports = router;
