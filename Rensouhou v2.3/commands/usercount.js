exports.run = (bot, message, args) => {
    message.guild.createdAt
    message.channel.send(`${message.guild.name} currently has ${message.guild.memberCount} users and counting!`);
  }