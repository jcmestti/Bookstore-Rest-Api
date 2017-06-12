var express = require('express');
var app = express();
var consign = require('consign');

consign()
    .include('./db.js')
    .then('./middlewares.js')
    .then('./models')
    .then('./controllers')
    .then('./routes')
    .into(app);

app.listen(8080, function() {
    console.log("The Server is Fucking Running");
});