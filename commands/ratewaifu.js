exports.run = function(client, message, args) {
  var roll = Math.floor(Math.random()*10);

  if (roll == 0)
    message.channel.send(`I would rate **${args.join(" ")}** a **1/10**`);
  if (roll == 1)
    message.channel.send(`I would rate **${args.join(" ")}** a **2/10**`);
  if (roll == 2)
    message.channel.send(`I would rate **${args.join(" ")}** a **3/10**`);
  if (roll == 3)
    message.channel.send(`I would rate **${args.join(" ")}** a **4/10**`);
  if (roll == 4)
    message.channel.send(`I would rate **${args.join(" ")}** a **5/10**`);
  if (roll == 5)
    message.channel.send(`I would rate **${args.join(" ")}** a **6/10**`);
  if (roll == 6)
    message.channel.send(`I would rate **${args.join(" ")}** a **7/10**`);
  if (roll == 7)
    message.channel.send(`I would rate **${args.join(" ")}** a **8/10**`);
  if (roll == 8)
    message.channel.send(`I would rate **${args.join(" ")}** a **9/10**`);
  if (roll == 9)
    message.channel.send(`I would rate **${args.join(" ")}** a **10/10**`);
}
