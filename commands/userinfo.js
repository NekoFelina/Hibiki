exports.run = function(client, message, args) {
  const Discord = require('discord.js');
  const moment = require('moment');
  const userinfo = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}'s info`, message.author.avatarURL)
    .setDescription('Everything you need to know about me')
    .setColor([51, 178, 255])
    .addField('Bot', `${message.author.bot}`, true)
    .addField('ID', `${message.author.id}`, true)
    .addField('Nickname', `${message.member.nickname}`, true)
    .addField('Joined Discord', `${message.author.createdAt}`, false)
    .addField('Joined Server', `${message.member.joinedAt}`, false)
    .addField('Roles', `${message.member.roles.map(e=>e.toString()).join(" ")}`, false)
    .setFooter(`Requested at ${moment().format('lll')}`);

  if (message.mentions.users.size === 0) {
    return message.channel.sendEmbed(userinfo);
  }
  const mentionedinfo = new Discord.RichEmbed()
    .setAuthor(`${message.mentions.users.first().tag}'s info`, message.mentions.users.first().avatarURL)
    .setDescription('Everything you need to know about me')
    .setColor([51, 178, 255])
    .addField('Bot', `${message.mentions.users.first().bot}`, true)
    .addField('ID', `${message.mentions.users.first().id}`, true)
    .addField('Nickname', `${message.mentions.members.first().nickname}`, true)
    .addField('Joined Discord', `${message.mentions.users.first().createdAt}`, false)
    .addField('Joined Server', `${message.mentions.members.first().joinedAt}`, false)
    .addField('Roles', `${message.mentions.members.first().roles.map(e=>e.toString()).join(" ")}`, false)
    .setFooter(`Requested at ${moment().format('lll')}`);

  message.channel.sendEmbed(mentionedinfo);
}
