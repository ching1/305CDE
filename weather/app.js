
/**
 * Module dependencies.
 */

// call the existing library
var express = require('express');
var http = require('http');
var path = require('path');

// import the folder and sub-file
var routes = require('./routes');
var method = require('./routes/method');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('jsonp callback name', 'callback');

// include the existing library
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', method.search_tmp);
app.get('/search', method.search_tmp);
app.post('/search', method.search);
app.get('/sh', method.search);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
