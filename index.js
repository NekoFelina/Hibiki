const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const yt = require('ytdl-core');
const tokens = require('./tokens.json');

client.login(tokens.d_token);

let queue = {};

const commands = {
	'play': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`**Error** | Add some songs to the queue first with ${tokens.prefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('**Error** | Already Playing');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			const leaving = new Discord.RichEmbed()
			  .setTitle("Notification")
				.setColor([255, 92, 92])
				.setDescription("No more songs in the queue! Leaving the Voice Channel...")
				.setThumbnail(client.user.avatarURL);

			if (song === undefined) return msg.channel.sendEmbed(leaving).then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			const playing = new Discord.RichEmbed()
			  .setTitle("Notification")
				.setColor([255, 92, 92])
				.setDescription("Playing song")
				.setThumbnail(msg.member.user.avatarURL)
				.addField("**Song**", `${song.title}`, true)
				.addField("**Requested By:**", `${song.requester}`, false);

			msg.channel.sendEmbed(playing);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(tokens.prefix + 'pause')) {
					msg.channel.sendMessage('paused').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(tokens.prefix + 'resume')){
					msg.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(tokens.prefix + 'skip')){
					msg.channel.sendMessage('skipped').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('h!volume +')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`**Notification** | Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('h!volume -')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`**Notification** | Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(tokens.prefix + 'time')){
					msg.channel.sendMessage(`**Notification** | time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('**Error** | I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'add': (msg) => {
		let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`**Error** | You must add a YouTube video url, or id | **${tokens.prefix}add**`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('**Error** | Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			const added = new Discord.RichEmbed()
			  .setTitle("Notification")
				.setColor([255, 92, 92])
				.setDescription("Song added")
				.addField("**Song**", `${info.title}`, true)
				.addField("**Added By**", `${msg.author.username}`, false)
				.setThumbnail(msg.member.user.avatarURL);

			msg.channel.sendEmbed(added);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`**Error** | Add some songs to the queue first with ${tokens.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},
	'reboot': (msg) => {
		if (msg.author.id == "148016257231224832") process.exit(); //Requires a node module like Forever to work.
	}
};

client.on('guildCreate', guild => {
	console.log(`CLIENT | Added to ${guild.name}`)
	console.log(`Owner - ${guild.owner.user.username}`)
	console.log(`Members - ${guild.memberCount}`);
});

client.on('guildDelete', guild => {
	console.log(`CLIENT | Removed from ${guild.name}`)
	console.log(`Owner - ${guild.owner.user.username}`)
	console.log(`Members - ${guild.memberCount}`);
});

client.on('message', msg => {
	if (!msg.content.startsWith("h!")) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0]](msg);
});

require('./util/eventLoader')(client);

var reload = (message, cmd) => {
  if(message.author.id !== "318707008939229185") return;
  delete require.cache[require.resolve('./commands/' + cmd)];
  try {
    let cmdFile = require('./commands/' + cmd);
  } catch (err) {
    message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  }
  message.channel.sendMessage(`${cmd} reload was a success!`).then(
    response => response.delete(1000).catch(error => console.log(error.stack))
  ).catch(error => console.log(error.stack));
};
exports.reload = reload;
