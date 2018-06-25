const talkedRecently = new Set();
const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (talkedRecently.has(message.author.id))
    return message.channel.sendMessage("Slow down! Relax~ (3 seconds cooldown)");

  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 3000);
  if(message.mentions.users.size === 0) {
    return message.channel.send("Feel the love! Mention someone~");
  }
  if(message.mentions.users.first().id === message.author.id) {
    return message.channel.send("Don't pat yourself! *headpats you*")
  }
  const headpat = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("http://i.imgur.com/gHg3VG0.gif");

  const headpat2 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("https://78.media.tumblr.com/71d93048022df065a1d2af96ab71afa3/tumblr_olykrec0DB1qbvovho1_500.gif");

  const headpat3 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("https://media.giphy.com/media/12hvLuZ7uzvCvK/giphy.gif");

  const headpat4 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("https://pa1.narvii.com/6401/2e4fc400d0229c990e1c47cd770d2de94ab4ad00_hq.gif");

  const headpat5 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("http://i.imgur.com/UMVNZrd.gif");

  const headpat6 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("http://i.imgur.com/JfRGrgw.gif");

  const headpat7 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("https://i.gifer.com/OVXY.gif");

  const headpat8 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("http://i.imgur.com/sLwoifL.gif");

  const headpat9 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("https://media.tenor.com/images/3768a9bfac80ec14257538c3b6bb9ad3/tenor.gif");

  const headpat10 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("https://i.imgur.com/fp9XJZO.gif");

  const headpat11 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("https://media1.tenor.com/images/2b2f9c5d046ea2cdaca41dfdc4356eea/tenor.gif");

  const headpat12 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a headpat. :heart:`)
    .setImage("https://i.imgur.com/LUypjw3.gif");

  var roll = Math.floor(Math.random()*12);

  if (roll == 0)
    message.channel.sendEmbed(headpat);
  if (roll == 1)
    message.channel.sendEmbed(headpat2);
  if (roll == 2)
    message.channel.sendEmbed(headpat3);
  if (roll == 3)
    message.channel.sendEmbed(headpat4);
  if (roll == 4)
    message.channel.sendEmbed(headpat5);
  if (roll == 5)
    message.channel.sendEmbed(headpat6);
  if (roll == 6)
    message.channel.sendEmbed(headpat7);
  if (roll == 7)
    message.channel.sendEmbed(headpat8);
  if (roll == 8)
    message.channel.sendEmbed(headpat9);
  if (roll == 9)
    message.channel.sendEmbed(headpat10);
  if (roll == 10)
    message.channel.sendEmbed(headpat11);
  if (roll == 11)
    message.channel.sendEmbed(headpat12);
    
});
