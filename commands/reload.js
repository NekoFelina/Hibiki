const main = require('../index.js');
exports.run = function(client, message, args) {
  if(message.author.id !== "318707008939229185") return;
  let cmd = args.join(' ');
  main.reload(message, cmd);
};
