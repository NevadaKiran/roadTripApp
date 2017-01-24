var express = require('express'); // Loading the express module on our server
var app = express(); // Create a new instance of express on our server
var hbs = require('hbs');

app.set('view engine', hbs);

  app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
    res.send("Hello World!");
  });

  app.get('/greeting', function(req, res){
    console.log(req.query);

    res.render('greeting', {data: req.query.saying});

   });

    app.get('/riri', function(req, res){
      res.send("Work, work, work, work, work!"); });

//       app.get("/:name", function(req, res){
//   console.log(req.params);
//   console.log(req.route);
//   console.log(req.query);
//   res.send(`hello ${req.params.name}, my name is ${req.query.first_name} ${req.query.last_name}`);
// });
app.get('/favorite:noun', function(req, res){
  console.log(req.query);
  res.send({params: req.params, queries: req.query});
});;

app.get('/:sightings', function(req, res){
  console.log(req.query);
  res.send('r${req.params.state} ${req.params.state}');
});


  var port = process.env.PORT || 3000; // telling the server where to listen for requests
  app.listen(port, function() {
    // telling the server where to listen for requests on port 3000

     console.log('hello-express is listening on port 3000');
   }); // actualizing the above line
