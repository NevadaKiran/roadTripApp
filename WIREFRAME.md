User {}
  - email, string
  - password_digest, string
  - [trip], embedded object
  - created_at
  - updated_at

Landmark
  - name, string
  - description, string
  - created_at
  - updated_at


Trip
  - start_point, string
  - end_point, string
  - [landMark], embedded object


UserStories will define how you interact with this data from a users perspective


As a user, I want to be able to create a trip.
 - user model
 - trip model needs to be done
 - user needs to be able log in and signup
 - need views for creating a trip, and the get and post route
As a user, I want to log my stops on that trip, so i can visualize my journey.
As a user, I want to be able to sign up
As a user, I want to be able to log in
HEROKU!!!!!!!!!!!!!
https://travel-best-plannner-ever.herokuapp.com/ | https://git.heroku.com/travel-best-plannner-ever.git

=================================================

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
====================================================
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>roadTrip</title>
    <!-- <link href="https://fonts.googleapis.com/css?family=Cormorant" rel="stylesheet"> -->
    <link rel="stylesheet" href="/styles/style.css" media="screen" title="no title">

  </head>
  <body>
    <!-- <img src="/public/images/mountainUSA.jpg" alt=""> -->
    <nav>
      <ul>
        <li><a href="/users/signup">signup</a> | </li>
        <li><a href="/sessions/login">login</a> | </li>
        <li>
          <form method="post" action="/sessions?_method=DELETE">
            <input type="submit" value="logout">
          </form>
        </li>
      </ul>
    </nav>
    <a href="/users"><h1 id="main-heading">Travel Planner</a></h1>
    {{{body}}}
  </body>
</html>

Login
- get a password that is forgotten
- how to delete accounts

Issues
- breaking of the nodemon.
- why didn't this code work?  What did I do wrong.
- 

Reach
- link to actual map
- add landmarks
- add ratings.
- make it so users can have hidden trip
