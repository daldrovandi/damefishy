'use strict';

//var express = require('express');
//var http = require('http');
//var path = require('path');
//var favicon = require('serve-favicon');
//var morgan = require('morgan');
//var errorhandler = require('errorhandler');
//var app = express();
//
//app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
//
////app.use(favicon(__dirname + '/app/favicon.ico'));
//app.use(morgan('dev'));
//
//if ('development' === app.get('env')) {
//    app.use(errorhandler());
//}
//
//http.createServer(app).listen(app.get('port'), function () {
//    console.log('Listening on port ' + app.get('port') + '...');
//});

var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));
app.all('/*', function(req, res) {
    res.sendfile('app/index.html'); // or the name of your angular app html file
});
app.listen(3000);
console.log('Listening on port 3000 ...');