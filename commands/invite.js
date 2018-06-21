const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const mentionedinfo = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription("Use one of these 2 links to invite me!")
    .addField('DiscordBots.org', `http://bit.ly/HibikiOne`, false)
    .addField('bots.discord.pw', `http://bit.ly/HibikiTwo`, false);

  message.channel.sendEmbed(mentionedinfo);
}
