exports.run = (bot, message, args) => {
    message.channel.send("Please Wait...").then((msg) => {
      msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    });
  }