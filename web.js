var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello, there.');
    var htmlFile = fs.readFileSync('./pages/stylish-portfolio.html');
    response.send(htmlFile.toString());   
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
