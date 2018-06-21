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
    return message.channel.send("Don't be lonely! *hugs you*")
  }
  const hug = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://media.tenor.co/images/efdd8f53689b1bb3437054d608156e95/tenor.gif");

  const hug2 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://68.media.tumblr.com/21f89b12419bda49ce8ee33d50f01f85/tumblr_o5u9l1rBqg1ttmhcxo1_500.gif");

  const hug3 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://media.tenor.co/images/e07a54a316ea6581329a7ccba23aea2f/tenor.gif");

  const hug4 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://m.popkey.co/32edb3/zE7XE.gif");

  const hug5 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614629987155969/98b250b6a7d81dec8d153071fcf22820.gif");

  const hug6 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614588140716033/2b54a605f183adbfc6898e6820eb62b4.gif");

  const hug7 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614526479990784/8572a1d1ebaa45fae290e6760b59caac.gif");

  const hug8 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614540732235776/37cbdb87b2aafd651fed5d9764b9967348c5ccd5_hq.gif");

  const hug9 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614427091763200/8ruodNJ.gif");

  const hug10 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614322901188608/7febe1ebeca953a4fa29b0180b858181.gif");

  const hug11 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333614212041670657/tumblr_msexao8iX51re6rdoo1_500.gif");

  const hug12 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615124872953886/anime-couple-gif-hug-Favim.com-3637687.gif");

  const hug13 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615282486771714/giphy_3.gif");

  const hug14 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615309040648193/giphy_4.gif");

  const hug15 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615331669180417/fewfregr.gif");

  const hug16 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615351273226240/giphy.gif");

  const hug17 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333615526846660609/raw.gif");

  const hug18 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333616135519993856/tumblr_n8w7phs27N1tuk680o1_500.gif");

  const hug19 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333616085121368064/tumblr_o0aksw1TQ31us9tevo1_500.gif");

  const hug20 = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`**${message.member.user.username}** gave **${message.mentions.users.first().username}** a hug. :heart:`)
    .setImage("https://cdn.discordapp.com/attachments/333478519793254401/333616076032049152/tumblr_np812aVnbN1uprh6zo1_500.gif");

  var roll = Math.floor(Math.random()*20);

  if (roll == 0)
    message.channel.sendEmbed(hug);
  if (roll == 1)
    message.channel.sendEmbed(hug2);
  if (roll == 2)
    message.channel.sendEmbed(hug3);
  if (roll == 3)
    message.channel.sendEmbed(hug4);
  if (roll == 4)
    message.channel.sendEmbed(hug5);
  if (roll == 5)
    message.channel.sendEmbed(hug6);
  if (roll == 6)
    message.channel.sendEmbed(hug7);
  if (roll == 7)
    message.channel.sendEmbed(hug8);
  if (roll == 8)
    message.channel.sendEmbed(hug9);
  if (roll == 9)
    message.channel.sendEmbed(hug10);
  if (roll == 10)
    message.channel.sendEmbed(hug11);
  if (roll == 11)
    message.channel.sendEmbed(hug12);
  if (roll == 12)
    message.channel.sendEmbed(hug13);
  if (roll == 13)
    message.channel.sendEmbed(hug14);
  if (roll == 14)
    message.channel.sendEmbed(hug15);
  if (roll == 15)
    message.channel.sendEmbed(hug16);
  if (roll == 16)
    message.channel.sendEmbed(hug17);
  if (roll == 17)
    message.channel.sendEmbed(hug18);
  if (roll == 18)
    message.channel.sendEmbed(hug19);
  if (roll == 19)
    message.channel.sendEmbed(hug20);
}
