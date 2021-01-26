exports.run = (bot, message, args) => {
    const Discord = require("discord.js");
    let botSpam = "420055537795989504";
    if (message.channel.id !== botSpam) return;
      
      let applicant = message.author.username;
      let idea = message.content;
      idea = idea.slice(8);
      var suggestion = new Discord.RichEmbed()
      .setAuthor(applicant, message.author.avatarURL)
          .setDescription(idea)
      .setColor(0x00AE86)
      bot.channels.get("565298027687051265").send(suggestion)
    .then(function (message) {
          message.react("433852654054014976")
        message.react("433852666293256193")
        .catch(() => console.error("Emote failed to react."));
    });
  }