var express = require('express');
var path  = require('path');
var app = express();
var fs = require('fs');
var htmlFile = './public/index.html'

// Log requests
app.use(express.logger());

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  //response.send('Hello, there.');
    var html = fs.readFileSync(htmlFile).toString();
    response.send(html);   
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
