var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(4242, () => console.log('listening on port 4242'));