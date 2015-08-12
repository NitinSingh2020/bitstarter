var express = require('express')
var fs = require('fs');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  //response.send('Hello Allison and Tao! Accept my e-Hi.');
  fs.readFileSync('./index.html', function(err,data){
    if (err) throw err;
    response.send(data);
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
