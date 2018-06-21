const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const help = new Discord.RichEmbed()
    .setTitle(`Help Page of ${client.user.username}`)
    .setDescription("__This will be updated in the future!__")
    .setColor([255, 92, 92])
    .addField("Audio","Play | Pause | Resume | Join | Add | Volume | Queue | Skip | Time")
    .addField("Fun","Hug | Ratewaifu | Ship")
    .addField("Util","Help | Ping | Stats (WIP) | Support | Userinfo")
    .addField("Moderation","Purge");

  message.channel.sendEmbed(help);
}
