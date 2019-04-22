'use strict';

var app = require('./index');
var http = require('http');




var server = http.Server(app);
server.listen(process.env.PORT || 8000);

server.on('listening', function () {
  global.log.info('Server listening on http://localhost:%d', this.address().port);
});


