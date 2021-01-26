exports.run = (bot, message, args) => {
    const Discord = require("discord.js");
    let rollNumber = message.content;
      rollNumber = rollNumber.slice(5);
      let rollResult = Math.floor((Math.random() * rollNumber) + 1);
      var rollReturn = new Discord.RichEmbed()
      .setAuthor("🎲 Rolling Dice!")
      .setDescription(`${message.author} rolled... **${rollResult}**`)
      .setColor(0x00AE86)
      message.channel.send(rollReturn);
  }