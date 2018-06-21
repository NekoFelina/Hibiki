module.exports = message => {
  const client = message.client;
  var prefix = "h!";
  const args = message.content.split(' ');
  const command = args.shift().slice(prefix.length);

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  try {
    let cmdFile = require(`../commands/${command}`);
    cmdFile.run(client, message, args);
  } catch (err) {
    console.log(`Command ${command} failed\n${err.stack}`);
  }
};
