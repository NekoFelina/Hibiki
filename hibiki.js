const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./index.js');
Manager.spawn(12);
Manager.on('launch', shard => console.log(`INFO | Sharding: Successfully launched shard ${shard.id}`));
