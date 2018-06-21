const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const noperm1 = new Discord.RichEmbed()
      .setTitle("No permission")
      .setColor([255, 92, 92])
      .setDescription("You require the permission **Manage Messages** to execute this command!");

    return message.channel.sendEmbed(noperm1);
  }
  const amountmsg = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription("You have to specify an amount and/or user to delete!");

  const user = message.mentions.users.first();
  const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
  if (!amount) return message.channel.sendEmbed(amountmsg);
  if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
  const succeed = new Discord.RichEmbed()
    .setColor([255, 92, 92])
    .setDescription(`Successfully deleted ${amount} messages!`);

  message.channel.fetchMessages({
   limit: amount,
  }).then((messages) => {
   if (user) {
   const filterBy = user ? user.id : Client.user.id;
   messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
   }
   message.channel.bulkDelete(messages)
   message.channel.sendEmbed(succeed);
  });
}
