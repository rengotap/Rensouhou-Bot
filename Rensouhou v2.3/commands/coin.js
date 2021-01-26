//Flip a coin
exports.run = (bot, message, args) => {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
      message.channel.send(`${message.author.username} tossed a coin and got **Heads!**`);
    } else if (result == 2) {
      message.channel.send(`${message.author.username} tossed a coin and got **Tails!**`);
    }
  }