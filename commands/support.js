exports.run = function(client, message, args) {
  const Discord = require('discord.js');
  const Support = new Discord.RichEmbed()
    .setTitle("Click here to join the support server")
    .setColor([255, 92, 92])
    .setDescription("[Hibiki's Support Server](https://discord.gg/u2MCeJG)");

  message.channel.sendEmbed(Support);
}
