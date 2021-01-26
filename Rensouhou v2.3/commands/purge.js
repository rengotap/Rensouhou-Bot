exports.run = (bot, message, args) => {
    if (message.author.id !== bot.config.ownerID) return;
    const deleteCount = parseInt(args[0], 10);
    message.channel.fetchMessages({limit: deleteCount })
      .then(messages => message.channel.bulkDelete(messages));
  }