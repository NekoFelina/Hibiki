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
    return message.channel.send("*pats you* Don't pat yourself!")
  }
  const pat = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://media.tenor.co/images/efdd8f53689b1bb3437054d608156e95/tenor.gif");

  const pat2 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://68.media.tumblr.com/21f89b12419bda49ce8ee33d50f01f85/tumblr_o5u9l1rBqg1ttmhcxo1_500.gif");

  const pat3 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://media.tenor.co/images/e07a54a316ea6581329a7ccba23aea2f/tenor.gif");

  const pat4 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://m.popkey.co/32edb3/zE7XE.gif");

  const pat5 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614629987155969/98b250b6a7d81dec8d153071fcf22820.gif");

  const pat6 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614588140716033/2b54a605f183adbfc6898e6820eb62b4.gif");

  const pat7 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614526479990784/8572a1d1ebaa45fae290e6760b59caac.gif");

  const pat8 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614540732235776/37cbdb87b2aafd651fed5d9764b9967348c5ccd5_hq.gif");

  const pat9 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614427091763200/8ruodNJ.gif");

  const pat10 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614322901188608/7febe1ebeca953a4fa29b0180b858181.gif");

  const pat11 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614212041670657/tumblr_msexao8iX51re6rdoo1_500.gif");

  const pat12 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615124872953886/anime-couple-gif-pat-Favim.com-3637687.gif");

  const pat13 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615282486771714/giphy_3.gif");

  const pat14 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615309040648193/giphy_4.gif");

  const pat15 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615331669180417/fewfregr.gif");

  const pat16 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615351273226240/giphy.gif");

  const pat17 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615526846660609/raw.gif");

  const pat18 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333616135519993856/tumblr_n8w7phs27N1tuk680o1_500.gif");

  const pat19 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333616085121368064/tumblr_o0aksw1TQ31us9tevo1_500.gif");

  const pat20 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a pat. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333616076032049152/tumblr_np812aVnbN1uprh6zo1_500.gif");

  var roll = Math.floor(Math.random()*20);

  if (roll == 0)
    message.channel.sendEmbed(pat);
  if (roll == 1)
    message.channel.sendEmbed(pat2);
  if (roll == 2)
    message.channel.sendEmbed(pat3);
  if (roll == 3)
    message.channel.sendEmbed(pat4);
  if (roll == 4)
    message.channel.sendEmbed(pat5);
  if (roll == 5)
    message.channel.sendEmbed(pat6);
  if (roll == 6)
    message.channel.sendEmbed(pat7);
  if (roll == 7)
    message.channel.sendEmbed(pat8);
  if (roll == 8)
    message.channel.sendEmbed(pat9);
  if (roll == 9)
    message.channel.sendEmbed(pat10);
  if (roll == 10)
    message.channel.sendEmbed(pat11);
  if (roll == 11)
    message.channel.sendEmbed(pat12);
  if (roll == 12)
    message.channel.sendEmbed(pat13);
  if (roll == 13)
    message.channel.sendEmbed(pat14);
  if (roll == 14)
    message.channel.sendEmbed(pat15);
  if (roll == 15)
    message.channel.sendEmbed(pat16);
  if (roll == 16)
    message.channel.sendEmbed(pat17);
  if (roll == 17)
    message.channel.sendEmbed(pat18);
  if (roll == 18)
    message.channel.sendEmbed(pat19);
  if (roll == 19)
    message.channel.sendEmbed(pat20);
}
