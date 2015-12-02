var express = require('express');

var app = express();
app.set('view engine', 'hbs');



app.listen(8080);

console.log("The server is up and running!");