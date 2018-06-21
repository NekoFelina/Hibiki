exports.run = function(client, message, args) {
  message.channel.send(`Pinging...`)
  .then(m => m.edit(`Pong! | **${m.createdTimestamp - message.createdTimestamp} ms**`))
}
