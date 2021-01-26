exports.run = (bot, message, args) => {
    if (message.author.id !== bot.config.ownerID) return;
    if (!message.guild) return; //If the command is in DMs it will be ignored
    if (message.member.voiceChannel) {
      const broadcast = bot.createVoiceBroadcast();
      message.member.voiceChannel.join().then(connection => {
        broadcast.playFile("/app/assets/cottonEyeJoe.mp3");
        const dispatcher = connection.playBroadcast(broadcast);
        console.log("Yeehaw!");
      });
    } else {
      console.log("Error has occured");
    }
  };
  