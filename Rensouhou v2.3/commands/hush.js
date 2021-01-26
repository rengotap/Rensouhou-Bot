exports.run = (bot, message, args) => {
    if (message.guild.voiceConnection) {
      message.guild.voiceConnection.disconnect();
      console.log("I'll be quiet now");
    }
  }