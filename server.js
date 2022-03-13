// server.js

var express = require('express');
var mongoose = require('mongoose');

var app = express();

var PORT = process.env.PORT || 8080;
var db = require('./config/db');

connectionsubject = mongoose.createConnection(db.urlSubjectViews);



require('./app/routes')(app); // pass our application into our routes


app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});

exports = module.exports = app; 