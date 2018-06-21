const moment = require('moment');
module.exports = client => {
  console.log(`CLIENT | ${client.user.tag} has (re)started! | ${moment().format('lll')}`);
  var interval = setInterval (function (){
		var roll = Math.floor(Math.random()*15);

		if (roll == 0)
			client.user.setActivity(`h!help | h!ship`);
		if (roll == 1)
			client.user.setActivity(`h!help | h!support`);
		if (roll == 2)
			client.user.setActivity(`h!help | We're Otaku's, not Weebs.`);
		if (roll == 3)
			client.user.setActivity(`h!help | Stop hacking me!!`);
		if (roll == 4)
			client.user.setActivity(`h!help | Not your average bot~`);
		if (roll == 5)
			client.user.setActivity(`h!help | I am too good for shards~`);
		if (roll == 6)
			client.user.setActivity(`h!help | Now with dual-core processor!`);
		if (roll == 7)
			client.user.setActivity(`h!help | I'm not a computer AI!`);
		if (roll == 8)
		  client.user.setActivity(`h!help | Your a 100/10!`);
		if (roll == 9)
		  client.user.setActivity(`h!help | Error 404`);
		if (roll == 10)
		  client.user.setActivity(`h!help | I won't bite! I promise!`);
		if (roll == 11)
		  client.user.setActivity(`h!help | We have music! Try?`);
		if (roll == 12)
		  client.user.setActivity(`h!help | ${client.channels.size} channels! uwu`);
		if (roll == 13)
		  client.user.setActivity(`h!help | ${client.guilds.size} servers! owo`);
		if (roll == 14)
		  client.user.setActivity(`h!help | ${client.users.size} users! -w-`);
	}, 60000);
}
