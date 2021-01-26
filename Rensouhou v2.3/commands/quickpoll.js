exports.run = (bot, message, args) => {
    const Discord = require("discord.js");
    message.delete()
    let pollTopic = message.content;
    pollTopic = pollTopic.slice(10);
    var poll = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(pollTopic)
      .setColor(0x00AE86)
    message.channel.send(poll)
    .then(function (message) {
      message.react("433852654054014976")
        .then(function (react) {
          message.react("433852666293256193")
        });
    });
  }