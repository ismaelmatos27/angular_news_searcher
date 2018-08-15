
var express = require('express');
var app = express();

//serve the files on local server
app.use(express.static(__dirname + '/'));
// listen for incoming request from the server 3000 or the serve of the client
app.listen(process.env.PORT || 3000);
