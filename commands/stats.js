var os = require('os-utils');
exports.run = function(client, message, args) {
  os.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
  });
}
