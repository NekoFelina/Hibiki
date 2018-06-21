const Discord = require('discord.js');
exports.run = function(client, message, args) {
		if (message.mentions.users.size === 0) {
			return message.channel.send("You need to mention 2 users to ship~!");
		}
		if (message.mentions.users.size === 1) {
			return message.channel.send("You need to mention 2 users to ship~!");
		}
		var roll = Math.floor(Math.random()*21);

		if (roll == 0) {
		  const per5 = new Discord.RichEmbed()
		    .setColor([255, 51, 51])
			  .setDescription("Results: **5%** | Argh what am I seeing? :broken_heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per5);
		}
		if (roll == 1) {
	  	const per10 = new Discord.RichEmbed()
		    .setColor([255, 51, 51])
			  .setDescription("Results: **10%** | At least is better than 0% :persevere:");

		  message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per10);
		}
		if (roll == 3) {
			const per15 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **15%** | At least no complete failure :frowning2:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per15);
		}
		if (roll == 4) {
			const per20 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **20%** | A step closer to 25% :frowning:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per20);
		}
		if (roll == 5) {
			const per25 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **25%** | Try again, you can do this~ :slight_frown:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per25);
		}
		if (roll == 6) {
			const per30 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **30%** | Quick heads up, not gonna work :confused:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per30);
		}
		if (roll == 7) {
			const per35 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **35%** | What are you even trying to do? :cry:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per35);
		}
		if (roll == 8) {
			const per40 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **40%** | Come on~ :fearful:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per40);
		}
		if (roll == 9) {
			const per45 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **45%** | Try again, you can do this~ :hushed:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per45);
		}
		if (roll == 10) {
			const per50 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **50%** | Pwease.... :stuck_out_tongue:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per50);
		}
		if (roll == 11) {
			const per55 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **55%** | Woop Woop~ :stuck_out_tongue_winking_eye:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per55);
		}
		if (roll == 12) {
			const per60 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **60%** | Come on, you did good~ :wink:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per60);
		}
		if (roll == 13) {
			const per65 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **65%** | Pretty good~ :kissing_heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per65);
		}
		if (roll == 14) {
			const per70 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **69%** | You know what I mean~ :smirk:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per70);
		}
		if (roll == 15) {
			const per75 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **75%** | I love the number 7~ :kissing_smiling_eyes:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per75);
		}
		if (roll == 16) {
			const per80 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **80%** | Error 404: Answer not found :warning:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per80);
		}
		if (roll == 17) {
			const per85 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **85%** | Lovey-dovey~ :heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per85);
		}
		if (roll == 18) {
			const per90 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **90%** | OwO :gift_heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per90);
		}
		if (roll == 19) {
			const per95 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **95%** | Amazing, NOW LOVE~! :heartpulse:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per95);
		}
		if (roll == 20) {
			const per100 = new Discord.RichEmbed()
				.setColor([255, 51, 51])
				.setDescription("Results: **100%** | Destiny chose u two~ :sparkling_heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per100);
		}
}
