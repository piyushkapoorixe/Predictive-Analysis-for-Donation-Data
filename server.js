var express = require('express');
var app = express();

var mongoose = require('mongoose');


var PORT = process.env.PORT || 8080; // set our port;
var db = require('./config/db');

// connect to our mongoDB database (commented out after you enter in your own credentials)
connectionsubject = mongoose.createConnection(db.urlSubjectViews);

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start the app
app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});

exports = module.exports = app;
