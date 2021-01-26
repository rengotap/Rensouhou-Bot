exports.run = (bot, message, args) => {
    if (message.author.id !== bot.config.ownerID) return;
    message.delete()
    message.channel.send(args.join(' '));
  }