var MongoClient = require('mongodb').MongoClient();

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/starsDB", function(err, db) {
  if(err) { return console.dir(err); }


});